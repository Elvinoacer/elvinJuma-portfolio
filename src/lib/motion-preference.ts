"use client";

import { useSyncExternalStore } from "react";

/**
 * Site-wide motion preference.
 *
 * Motion is on unless the device asks for reduced motion or the visitor turns
 * it off with a MOTION toggle. The visitor's choice is persisted and mirrored
 * to `<html data-motion="off">` so CSS-only (scroll-driven) effects can follow
 * it too. An inline script in the root layout applies the attribute before
 * first paint to avoid a flash of motion.
 */

const STORAGE_KEY = "motion";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const listeners = new Set<() => void>();
let userDisabled = false;
let initialised = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function init() {
  if (initialised || typeof window === "undefined") return;
  initialised = true;
  try {
    userDisabled = localStorage.getItem(STORAGE_KEY) === "off";
  } catch {
    userDisabled = false;
  }
  window.matchMedia(REDUCED_QUERY).addEventListener("change", emit);
}

export function systemPrefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_QUERY).matches;
}

export function isMotionEnabled() {
  init();
  return !userDisabled && !systemPrefersReducedMotion();
}

export function setMotionEnabled(enabled: boolean) {
  init();
  userDisabled = !enabled;
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  } catch {
    /* Storage can be unavailable in private modes; the in-memory value still applies. */
  }
  if (enabled) delete document.documentElement.dataset.motion;
  else document.documentElement.dataset.motion = "off";
  emit();
}

export function subscribeMotion(listener: () => void) {
  init();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Script injected into <head> so the stored preference applies before hydration. */
export const motionPreferenceScript = `try{if(localStorage.getItem("${STORAGE_KEY}")==="off")document.documentElement.dataset.motion="off"}catch(e){}`;

/** True when ambient and scroll-driven motion should run. Server snapshot assumes motion. */
export function useMotionEnabled() {
  return useSyncExternalStore(subscribeMotion, isMotionEnabled, () => true);
}

/** True when the operating system requests reduced motion (the toggle can't override this). */
export function useSystemReducedMotion() {
  return useSyncExternalStore(subscribeMotion, systemPrefersReducedMotion, () => false);
}

function subscribeMedia(query: string) {
  return (listener: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  };
}

const mediaSubscribers = new Map<string, (listener: () => void) => () => void>();

/** Subscribe to a media query. Returns `fallback` during server rendering. */
export function useMediaQuery(query: string, fallback = false) {
  let subscribe = mediaSubscribers.get(query);
  if (!subscribe) {
    subscribe = subscribeMedia(query);
    mediaSubscribers.set(query, subscribe);
  }
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => fallback);
}

/** Viewports large enough for pinned, scroll-scrubbed chapters. Mirrors `--pinned` in globals.css. */
export const PINNED_QUERY = "(min-width: 900px) and (min-height: 600px)";

/** Pinned storytelling is active: motion allowed and the viewport is large enough. */
export function usePinnedStory() {
  const motion = useMotionEnabled();
  const large = useMediaQuery(PINNED_QUERY, true);
  return motion && large;
}
