import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function Particles({ count = 90, reduced }: { count?: number; reduced: boolean }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current || reduced) return;
    points.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#2ec4b6"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function GradientOrbs({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current || reduced) return;
    const t = clock.elapsedTime;
    group.current.rotation.z = t * 0.04;
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 0.5 + i * 1.2) * 0.2;
    });
  });

  return (
    <group ref={group}>
      <mesh position={[-2.8, 1.2, -2]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#2ec4b6"
          emissive="#2ec4b6"
          emissiveIntensity={0.4}
          transparent
          opacity={0.28}
        />
      </mesh>
      <mesh position={[3.2, -0.6, -2.2]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#e83e8c"
          emissive="#e83e8c"
          emissiveIntensity={0.35}
          transparent
          opacity={0.22}
        />
      </mesh>
      <mesh position={[0.4, -1.8, -1.8]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#f4a261"
          emissive="#f4a261"
          emissiveIntensity={0.35}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

/** Ambient Three.js atmosphere only — portrait is rendered in HTML for clarity. */
export function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        className="!absolute inset-0 h-full w-full"
      >
        <ambientLight intensity={0.6} />
        <Particles reduced={reduced} />
        <GradientOrbs reduced={reduced} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
