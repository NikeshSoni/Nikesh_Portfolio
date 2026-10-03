"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

function FloatingParticles({ count = 120, color }: { count?: number; color: string }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 0.04 + 0.015;
    }
    return [pos, sz];
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime() * 0.15;
      pointsRef.current.rotation.y = time;
      pointsRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function InteractiveHeroMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  const primaryColor = isDark ? "#a78bfa" : "#7c3aed"; // Purple
  const secondaryColor = isDark ? "#38bdf8" : "#0284c7"; // Cyan/Blue
  const coreColor = isDark ? "#f472b6" : "#db2777"; // Pink
  const ringColor = isDark ? "#818cf8" : "#4f46e5"; // Indigo

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth tilt based on mouse position
    if (groupRef.current) {
      const targetRotX = pointer.y * 0.4;
      const targetRotY = pointer.x * 0.5;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
    }

    // Outer mesh continuous rotation + levitation
    if (outer.current) {
      outer.current.rotation.x = Math.sin(time * 0.4) * 0.3;
      outer.current.rotation.y += delta * 0.3;
      outer.current.position.y = Math.sin(time * 0.9) * 0.1;
    }

    // Inner mesh counter-rotation
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.35;
      inner.current.rotation.y -= delta * 0.25;
      inner.current.position.y = Math.cos(time * 0.9) * 0.08;
    }

    // Pulsing core
    if (core.current) {
      core.current.rotation.y += delta * 0.5;
      const pulse = 1 + Math.sin(time * 2.2) * 0.12;
      core.current.scale.set(pulse, pulse, pulse);
    }

    // Orbiting ring
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(time * 0.5) * 0.2;
      ringRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-8, -8, -5]} intensity={2} color={primaryColor} />
      <pointLight position={[8, -4, 5]} intensity={1.8} color={secondaryColor} />

      {/* Outer Icosahedron Wireframe */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          color={primaryColor}
          wireframe
          wireframeLinewidth={1.8}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* Orbiting Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.0, 0.018, 16, 100]} />
        <meshStandardMaterial color={ringColor} wireframe transparent opacity={0.65} />
      </mesh>

      {/* Inner Octahedron Wireframe */}
      <mesh ref={inner}>
        <octahedronGeometry args={[0.92, 0]} />
        <meshStandardMaterial
          color={secondaryColor}
          wireframe
          wireframeLinewidth={1.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing Core Sphere */}
      <mesh ref={core}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshBasicMaterial color={coreColor} transparent opacity={0.7} />
      </mesh>

      {/* Interactive Particle Cloud */}
      <FloatingParticles color={primaryColor} count={140} />
    </group>
  );
}

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="size-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.3], fov: 45 }}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <InteractiveHeroMesh />
      </Canvas>
    </div>
  );
}
