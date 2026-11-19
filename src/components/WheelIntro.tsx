"use client";

import { useEffect, useRef, useState } from "react";
import type { Material, Mesh } from "three";

function smooth(t: number, from: number, to: number) {
  const p = Math.min(1, Math.max(0, (t - from) / (to - from)));
  return p * p * (3 - 2 * p);
}

export function WheelIntro() {
  const [alive, setAlive] = useState(true);
  const [open, setOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    const glow = glowRef.current;
    if (!canvas || !shell || !glow) return;

    let cancelled = false;
    let dispose = () => {};
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = document.documentElement;
    const previousScroll = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScroll;

    (async () => {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      if (cancelled) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.72;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.01, 100);
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.18;

      scene.add(new THREE.HemisphereLight(0xffffff, 0x050505, 0.1));
      const key = new THREE.DirectionalLight(0xffffff, 1.55);
      key.position.set(2.8, 4.2, 6.5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x9eacbf, 0.22);
      fill.position.set(-4.5, 1.2, 3.5);
      scene.add(fill);
      const rim = new THREE.DirectionalLight(0xffffff, 0.45);
      rim.position.set(0, 2.2, -6);
      scene.add(rim);
      const glint = new THREE.DirectionalLight(0xffffff, 0);
      glint.position.set(-6, 2.2, 5);
      scene.add(glint);

      const align = new THREE.Group();
      const spin = new THREE.Group();
      scene.add(align);
      align.add(spin);

      let spinAxis: "x" | "y" | "z" = "z";
      let frame = 0;
      let elapsed = 0;
      let opened = false;
      let removeAt = 0;
      let last = performance.now();

      const frameWheel = (radius: number) => {
        const fov = (camera.fov * Math.PI) / 180;
        camera.position.set(0, 0, (radius / Math.tan(fov / 2)) * 1.45);
        camera.lookAt(0, 0, 0);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      };

      let wheelRadius = 1;
      const onResize = () => frameWheel(wheelRadius);
      window.addEventListener("resize", onResize);

      const finish = (now: number) => {
        if (opened) return;
        opened = true;
        shell.classList.add("is-open");
        setOpen(true);
        removeAt = now + 0.9;
      };

      const tick = () => {
        if (cancelled) return;
        const now = performance.now();
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        elapsed += dt;
        const t = elapsed;
        const appear = smooth(t, 0, 0.55);
        canvas.style.opacity = String(appear);
        glow.style.opacity = String(appear);
        const settle = 0.92 + appear * 0.08;
        align.scale.setScalar(settle + Math.sin(Math.min(appear, 1) * Math.PI) * 0.025);
        const ramp = smooth(t, 0.35, 1.25);
        spin.rotation[spinAxis] += ramp * ramp * 16 * dt;
        const flash = smooth(t, 2.45, 3.15);
        glint.intensity = Math.sin(Math.min(flash, 1) * Math.PI) * 2.2;
        glint.position.x = -7 + flash * 14;
        if (t > 3.05) finish(t);
        if (removeAt && t >= removeAt) {
          setAlive(false);
          return;
        }
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
      };

      const failSafe = window.setTimeout(() => setAlive(false), 20000);
      const loader = new GLTFLoader();
      loader.load(
        "/models/sports_car_wheel.glb",
        (gltf) => {
          window.clearTimeout(failSafe);
          if (cancelled) return;
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          model.position.sub(box.getCenter(new THREE.Vector3()));
          spin.add(model);
          const ordered = [
            { axis: "x" as const, value: size.x },
            { axis: "y" as const, value: size.y },
            { axis: "z" as const, value: size.z },
          ].sort((a, b) => a.value - b.value);
          spinAxis = ordered[0].axis;
          if (spinAxis === "x") align.rotation.y = -Math.PI / 2;
          if (spinAxis === "y") align.rotation.x = Math.PI / 2;
          if (spinAxis === "z") align.rotation.y = Math.PI;
          align.updateMatrixWorld(true);
          const world = new THREE.Box3().setFromObject(align);
          const worldSize = world.getSize(new THREE.Vector3());
          align.position.sub(world.getCenter(new THREE.Vector3()));
          wheelRadius = Math.max(worldSize.x, worldSize.y) * 0.5;
          frameWheel(wheelRadius);
          last = performance.now();
          frame = requestAnimationFrame(tick);
        },
        undefined,
        () => setAlive(false),
      );

      dispose = () => {
        cancelAnimationFrame(frame);
        window.clearTimeout(failSafe);
        window.removeEventListener("resize", onResize);
        scene.traverse((obj) => {
          const mesh = obj as Mesh;
          if (!mesh.isMesh) return;
          mesh.geometry?.dispose();
          const materials: Material[] = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((material) => material.dispose());
        });
        scene.environment?.dispose();
        pmrem.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      cancelled = true;
      dispose();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (alive) return;
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [alive]);

  if (!alive) return null;

  return (
    <div
      ref={shellRef}
      className="wheel-intro fixed inset-0 z-[90] bg-black"
      aria-hidden={open}
      role="status"
      aria-label="Betöltés"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 46%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-0" />
      <div className="wheel-glint" />
    </div>
  );
}
