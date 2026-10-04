"use client";

import { useEffect, useRef } from "react";
import { useMotionEnabled, systemPrefersReducedMotion } from "@/lib/motion-preference";

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision mediump float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
uniform float scrollProgress;

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec2 p = uv;

  // Wave ribbon running down the screen
  float wave = sin(p.y * 4.0 + sin(p.x * 2.5 + time * 0.15) * 1.4 + time * 0.12);
  
  // Center ribbon shifts horizontally with scroll
  float ribbonX = mix(0.42, 0.58, sin(scrollProgress * 3.14159));
  float ribbon = pow(max(0.0, 1.0 - abs(p.x - ribbonX - wave * 0.06)), 24.0);
  float edge = pow(max(0.0, 1.0 - abs(p.x - ribbonX - wave * 0.06)), 120.0);

  // Pool of ambient light following pointer & scroll
  vec2 poolCenter = mix(vec2(0.2, 0.8), vec2(0.8, 0.2), scrollProgress);
  float pool = exp(-4.0 * length((uv - poolCenter) * vec2(1.0, 0.75)));

  // Interactive mouse glow
  float cursor = exp(-7.5 * distance(uv, vec2(pointer.x, 1.0 - pointer.y)));

  // Subtle film grain
  float grain = (noise(gl_FragCoord.xy) - 0.5) * 0.02;

  // Color transitions through story chapters
  // Start: deep lime/emerald -> Mid: cyan/amber -> End: electric lime
  vec3 cHero = vec3(0.52, 0.72, 0.24);      // Lime green
  vec3 cProjects = vec3(0.18, 0.65, 0.60);  // Cyan/teal
  vec3 cCraft = vec3(0.55, 0.45, 0.80);     // Soft violet
  vec3 cContact = vec3(0.84, 0.98, 0.47);   // Pure vibrant lime

  vec3 colorA = mix(cHero, cProjects, clamp(scrollProgress * 2.5, 0.0, 1.0));
  vec3 colorB = mix(colorA, cCraft, clamp((scrollProgress - 0.4) * 3.0, 0.0, 1.0));
  vec3 finalColor = mix(colorB, cContact, clamp((scrollProgress - 0.8) * 5.0, 0.0, 1.0));

  vec3 lit = finalColor * (ribbon * 0.09 + edge * 0.06 + pool * 0.05 + cursor * 0.035) + grain;

  gl_FragColor = vec4(lit, 1.0);
}
`;

export default function LightThread() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compile(gl.VERTEX_SHADER, vertexShaderSource);
    const frag = compile(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    const uPointer = gl.getUniformLocation(program, "pointer");
    const uScroll = gl.getUniformLocation(program, "scrollProgress");

    let animId = 0;
    let prevTime = 0;
    let elapsed = 0;
    let mouseX = 0.5,
      mouseY = 0.5;
    let smoothMouseX = 0.5,
      smoothMouseY = 0.5;
    let currentScroll = 0;

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    updateSize();

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      currentScroll = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    };
    onScroll();

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    const render = (now: number) => {
      const shouldAnimate = motionEnabled && !systemPrefersReducedMotion() && !document.hidden;

      if (now - prevTime >= 33 || !shouldAnimate) {
        if (shouldAnimate) elapsed += Math.min(now - prevTime, 50) / 1000;
        prevTime = now;

        smoothMouseX += (mouseX - smoothMouseX) * 0.04;
        smoothMouseY += (mouseY - smoothMouseY) * 0.04;

        gl.uniform1f(uTime, elapsed);
        gl.uniform2f(uPointer, smoothMouseX, smoothMouseY);
        gl.uniform1f(uScroll, currentScroll);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      if (shouldAnimate) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    window.addEventListener("resize", updateSize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteBuffer(quadBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, [motionEnabled]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        opacity: 0.75,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
