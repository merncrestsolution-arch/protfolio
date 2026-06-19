import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Billboard, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseStore } from '../../store/mouseStore';
import { techLogos } from '../../data/techLogos';

// ── ORBITAL CAMERA CONTROLLER ──────────────────────────────────────────────
function OrbitalCamera() {
  const { camera } = useThree();

  useFrame(() => {
    const { snx, sny } = useMouseStore.getState();

    // Convert mouse to spherical coordinates
    // theta = horizontal orbit (full 360° mapped to mouse-x range)
    // phi = vertical tilt (clamped to avoid poles)
    const theta = snx * Math.PI;            // -180° to +180°
    const phi = Math.PI / 2 - sny * 0.6;   // ~20° to ~160° (clamped away from poles)
    const radius = 13;

    // Spherical to cartesian
    camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
    camera.position.y = radius * Math.cos(phi);
    camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── CENTRAL AVATAR SPHERE ──────────────────────────────────────────────────
function AvatarCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });
  return (
    <group>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 32, 100]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
      </mesh>
      {/* Second ring at angle */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[3.2, 0.015, 32, 100]} />
        <meshBasicMaterial color="#7C4DFF" transparent opacity={0.4} />
      </mesh>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#050816"
          emissive="#00E5FF"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

// Removed AvatarPlane component

// ── TECH LOGO ORBITAL RING ─────────────────────────────────────────────────
// Select 12 key tech logos for the hero orbit
const ORBIT_LOGOS = techLogos.filter(logo => 
  ['React', 'Node.js', 'TypeScript', 'AWS EC2', 'MongoDB', 'Docker', 'PostgreSQL', 'Next.js', 'GraphQL', 'Tailwind', 'Express', 'Prisma'].includes(logo.name)
).slice(0, 12);

function OrbitalLogos() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const { snx } = useMouseStore.getState();
    // Base rotation + mouse influence
    groupRef.current.rotation.y = clock.elapsedTime * 0.15 + snx * Math.PI * 0.5;
  });

  return (
    <group ref={groupRef}>
      {ORBIT_LOGOS.map((logo, i) => {
        const angle = (i / ORBIT_LOGOS.length) * Math.PI * 2;
        const r = 5.5; // Increased orbit radius
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        return (
          <LogoNode key={logo.name} position={[x, 0, z]} logo={logo} />
        );
      })}
    </group>
  );
}

function LogoNode({ position, logo }: { position: [number,number,number], logo: typeof ORBIT_LOGOS[0] }) {
  const meshRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.15;
    }
  });
  return (
    <Billboard position={position} follow={true}>
      <group ref={meshRef}>
        <Html transform center scale={0.3}>
          <img 
            src={logo.iconUrl} 
            alt={logo.name} 
            style={{ 
              width: '80px', 
              height: '80px', 
              objectFit: 'contain',
              pointerEvents: 'none'
            }} 
          />
        </Html>
      </group>
      <Text
        position={[0, -0.45, 0]}
        fontSize={0.1}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        {logo.name}
      </Text>
    </Billboard>
  );
}

// ── DYNAMIC LIGHTING ───────────────────────────────────────────────────────
function DynamicLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(() => {
    if (!lightRef.current) return;
    const { snx, sny } = useMouseStore.getState();
    lightRef.current.position.set(snx * 6, sny * 4, 4);
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight ref={lightRef} color="#00E5FF" intensity={3} distance={15} />
      <pointLight position={[-5, 3, -5]} color="#7C4DFF" intensity={1.5} distance={12} />
    </>
  );
}

// ── FLOATING PARTICLES ─────────────────────────────────────────────────────
function SceneParticles() {
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 300;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00E5FF" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ── ERROR BOUNDARY ─────────────────────────────────────────────────────────
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// ── MAIN EXPORT ────────────────────────────────────────────────────────────
export function HeroScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-full">
      <ErrorBoundary fallback={<div className="w-full h-full bg-bg/50" />}>
        <Canvas
          camera={{ position: [0, 2, 13], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <Suspense fallback={null}>
            <OrbitalCamera />
            <DynamicLight />
            <AvatarCore />
            <OrbitalLogos />
            <SceneParticles />
            <Stars radius={80} depth={50} count={3000} factor={3} fade speed={0.5} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
