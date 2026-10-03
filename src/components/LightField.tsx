"use client";

import { useEffect, useRef } from "react";

const vertexSource = `attribute vec2 position; void main(){ gl_Position=vec4(position,0.,1.); }`;
const fragmentSource = `
precision mediump float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
  vec2 uv=gl_FragCoord.xy/resolution;
  vec2 p=uv;
  float wave=sin(p.y*5.0 + sin(p.x*3.0 + time*.18)*1.5 + time*.13);
  float ribbon=pow(max(0.0,1.0-abs(p.x*.75+p.y*.34-.38-wave*.045)),22.0);
  float edge=pow(max(0.0,1.0-abs(p.x*.75+p.y*.34-.39-wave*.045)),140.0);
  float pool=exp(-5.0*length((uv-vec2(.2,.0))*vec2(1.0,.7)));
  float cursor=exp(-8.0*distance(uv,vec2(pointer.x,1.0-pointer.y)));
  float grain=(noise(gl_FragCoord.xy)-.5)*.023;
  vec3 green=vec3(.52,.70,.22);
  vec3 color=green*(ribbon*.08+edge*.06+pool*.04+cursor*.025)+grain;
  gl_FragColor=vec4(color,1.0);
}`;

/** A restrained GPU light field. Stops when hidden, offscreen, paused, or reduced motion is requested. */
export default function LightField({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
    if (!canvas || !gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
      return shader;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource), fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) { if (vertex) gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment); return; }
    const program = gl.createProgram();
    if (!program) { gl.deleteShader(vertex); gl.deleteShader(fragment); return; }
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); return; }
    gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program,"position"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const size = gl.getUniformLocation(program,"resolution"), clock = gl.getUniformLocation(program,"time"), pointer = gl.getUniformLocation(program,"pointer");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, previous = 0, active = true, x = .4, y = .5, smoothX = x, smoothY = y;
    const render = (now: number) => {
      const animate = !paused && !reduced.matches && active && !document.hidden;
      if (now - previous >= 32 || !animate) {
        if (animate) elapsed.current += Math.min(now - previous, 50) / 1000;
        previous = now;
        smoothX += (x-smoothX)*.04; smoothY += (y-smoothY)*.04;
        gl.uniform1f(clock, elapsed.current); gl.uniform2f(pointer, smoothX, smoothY); gl.drawArrays(gl.TRIANGLES,0,6);
      }
      if (animate) frame = requestAnimationFrame(render);
    };
    const restart = () => { cancelAnimationFrame(frame); previous = 0; frame = requestAnimationFrame(render); };
    const resize = new ResizeObserver(([entry]) => { const dpr = Math.min(devicePixelRatio,1.25); canvas.width = entry.contentRect.width*dpr; canvas.height = entry.contentRect.height*dpr; gl.viewport(0,0,canvas.width,canvas.height); gl.uniform2f(size,canvas.width,canvas.height); restart(); });
    const observer = new IntersectionObserver(([entry]) => { active=entry.isIntersecting; restart(); });
    resize.observe(canvas); observer.observe(canvas);
    const host = canvas.closest("section");
    const move = (event: PointerEvent) => { if(event.pointerType!=="mouse"||paused||reduced.matches)return; const rect=canvas.getBoundingClientRect();x=(event.clientX-rect.left)/rect.width;y=(event.clientY-rect.top)/rect.height; };
    host?.addEventListener("pointermove",move,{passive:true});
    document.addEventListener("visibilitychange",restart); reduced.addEventListener("change",restart);
    return () => { cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();host?.removeEventListener("pointermove",move);document.removeEventListener("visibilitychange",restart);reduced.removeEventListener("change",restart);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment); };
  }, [paused]);
  return <canvas ref={ref} aria-hidden="true" style={{width:"100%",height:"100%",display:"block"}} />;
}
