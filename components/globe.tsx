"use client";

import { useEffect, useRef } from "react";

const ATLANTA: [number, number] = [33.749, -84.388];
const INDIANAPOLIS: [number, number] = [39.7684, -86.1581];
const HARTFORD: [number, number] = [41.7637, -72.6851];
const MINNEAPOLIS: [number, number] = [44.9778, -93.2650];
const SALEM: [number, number] = [44.9429, -123.0355];
const TAMPA: [number, number] = [27.9480, -82.4580];
const NEW_BRUNSWICK: [number, number] = [40.4883, -74.4478];


export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<number | null>(null);
  const movement = useRef(0);
  const phi = useRef(4.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame = 0;
    let raf = 0;
    let destroyed = false;
    let globe: { destroy: () => void } | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const width = () => canvas.offsetWidth;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") phi.current += 0.15;
      if (event.key === "ArrowLeft") phi.current -= 0.15;
      if (event.key === "ArrowUp") phi.current += 0.15;
      if (event.key === "ArrowDown") phi.current -= 0.15;
    };
    canvas.addEventListener("keydown", onKey);

    (async () => {
      const { default: createGlobe } = await import("cobe");
      if (destroyed) return;
      let size = width();
      const instance = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: size * 2,
        height: size * 2,
        phi: phi.current,
        theta: 0.28,
        dark: 1,
        diffuse: 1.35,
        mapSamples: 12000,
        mapBrightness: 5,
        baseColor: [0.055, 0.102, 0.31],
        markerColor: [1, 0.71, 0.28],
        glowColor: [0, 0.66, 1],
        markers: [
          { location: ATLANTA, size: 0.08 },
          { location: INDIANAPOLIS, size: 0.08 },
          { location: HARTFORD, size: 0.08 },
          { location: MINNEAPOLIS, size: 0.08 },
          { location: SALEM, size: 0.08 },
          { location: TAMPA, size: 0.08 },
          { location: NEW_BRUNSWICK, size: 0.08 }
        ],
      });
      if (destroyed) {
        instance.destroy();
        return;
      }
      globe = instance;
      const loop = () => {
        if (pointer.current === null && !reduced.matches) phi.current += 0.003;
        const next = width() || size;
        size = next;
        instance.update({
          phi: phi.current + movement.current / 180,
          width: next * 2,
          height: next * 2,
        });
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      frame = requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    })();

    return () => {
      destroyed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(raf);
      canvas.removeEventListener("keydown", onKey);
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Draggable globe with a markers. Arrow keys rotate it when focused."
      role="img"
      tabIndex={0}
      className="h-full w-full cursor-grab opacity-0 transition-opacity duration-700 focus-visible:outline focus-visible:outline-sky active:cursor-grabbing"
      onPointerDown={(event) => {
        pointer.current = event.clientX - movement.current;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerUp={() => {
        if (pointer.current !== null) phi.current += movement.current / 180;
        pointer.current = null;
        movement.current = 0;
      }}
      onPointerCancel={() => {
        pointer.current = null;
        movement.current = 0;
      }}
      onPointerMove={(event) => {
        if (pointer.current === null) return;
        movement.current = event.clientX - pointer.current;
      }}
    />
  );
}
