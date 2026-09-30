"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** A toroidal sculpture with no 3D runtime and no per-frame React updates. */
export default function GenerativeSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotation = useRef(0.5);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, frame = 0, angle = rotation.current, lastTime = 0;
    let visible = true, pointerX = 0, pointerY = 0, easedX = 0, easedY = 0;
    const rings = 76, points = 92;
    const geometry = Array.from({ length: rings }, (_, ring) => {
      const u = ring / rings * Math.PI * 2;
      return Array.from({ length: points + 1 }, (_, point) => {
        const v = point / points * Math.PI * 2;
        const tube = 0.53 + 0.08 * Math.cos(u * 3);
        const radial = 1.24 + tube * Math.cos(v);
        return { x: radial * Math.cos(u), y: radial * Math.sin(u), z: tube * Math.sin(v) + 0.22 * Math.sin(u * 3) };
      });
    });
    function draw(time: number) {
      if (!context || !canvas) return;
      const moving = !paused && !reduced.matches;
      if (moving && visible && !document.hidden) angle += Math.min(time - lastTime || 16, 50) * 0.000065;
      rotation.current = angle;
      lastTime = time;
      easedX += (pointerX - easedX) * 0.045;
      easedY += (pointerY - easedY) * 0.045;
      context.clearRect(0, 0, width, height);
      const tilt = 0.78 + (reduced.matches ? 0 : easedY * 0.23);
      const spin = angle + (reduced.matches ? 0 : easedX * 0.23);
      const cosX = Math.cos(tilt), sinX = Math.sin(tilt), cosY = Math.cos(spin), sinY = Math.sin(spin), cosZ = Math.cos(-0.52), sinZ = Math.sin(-0.52);
      const scale = Math.min(width, height) * 0.235;
      const projected = geometry.map((ring, index) => {
        let depth = 0;
        const vertices = ring.map((point) => {
          const y = point.y * cosX - point.z * sinX;
          const z1 = point.y * sinX + point.z * cosX;
          const x = point.x * cosY + z1 * sinY;
          const z = -point.x * sinY + z1 * cosY;
          const perspective = 5 / (5 - z);
          depth += z;
          return { x: (x * cosZ - y * sinZ) * scale * perspective + width / 2, y: (x * sinZ + y * cosZ) * scale * perspective + height / 2 };
        });
        return { vertices, depth: depth / ring.length, index };
      }).sort((a, b) => a.depth - b.depth);
      for (const ring of projected) {
        const light = Math.max(0.12, Math.min(1, (ring.depth + 1.7) / 3));
        const isLime = ring.index > 25 && ring.index < 57;
        context.beginPath();
        ring.vertices.forEach((point, i) => i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
        context.strokeStyle = isLime ? `rgba(205,249,139,${0.17 + light * 0.73})` : `rgba(226,232,218,${0.09 + light * 0.66})`;
        context.lineWidth = 0.55 + light * 0.5;
        context.stroke();
      }
      if (moving && visible && !document.hidden) frame = requestAnimationFrame(draw);
    }
    function restart() { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); }
    const observer = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width; height = entry.contentRect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      restart();
    });
    observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    intersection.observe(canvas);
    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const bounds = canvas!.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
      if (paused) restart();
    }
    function leave() { pointerX = 0; pointerY = 0; }
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", restart); reduced.addEventListener("change", restart);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); document.removeEventListener("visibilitychange", restart); reduced.removeEventListener("change", restart); };
  }, [paused]);
  return <div className="sculpture-wrap"><div className="sculpture-halo" aria-hidden="true" /><canvas ref={canvasRef} className="sculpture-canvas" role="img" aria-label="An intricate three-dimensional wire sculpture in silver and lime, slowly turning" /><button type="button" onClick={() => setPaused(!paused)} className="sculpture-control" aria-label={paused ? "Play sculpture animation" : "Pause sculpture animation"} aria-pressed={paused}>{paused ? <Play size={12} /> : <Pause size={12} />}<span>{paused ? "PLAY" : "PAUSE"}</span></button></div>;
}
