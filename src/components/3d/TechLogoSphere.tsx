import React, { useRef, useState, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseStore } from '../../store/mouseStore';
import { techLogos, TechLogo } from '../../data/techLogos';

// Fibonacci sphere algorithm for even point distribution
function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push(new THREE.Vector3(
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius
    ));
  }
  return points;
}

interface LogoNodeProps {
  position: THREE.Vector3;
  logo: TechLogo;
}

function LogoNode({ position, logo }: LogoNodeProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Subtle floating micro-animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const floatOffset = Math.sin(clock.elapsedTime * 0.5 + position.x) * 0.05;
      meshRef.current.position.y = position.y + floatOffset;
    }
  });

  return (
    <group
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      <Billboard follow={true}>
        {/* Glow Outline on Hover */}
        {hovered && (
          <mesh position={[0, 0, -0.02]} scale={1.55}>
            <planeGeometry args={[0.65, 0.65]} />
            <meshBasicMaterial
              color="#00E5FF"
              transparent
              opacity={0.8}
            />
          </mesh>
        )}

        {/* The Technology Logo Image */}
        <Html transform center scale={hovered ? 0.12 : 0.08}>
          <img 
            src={logo.iconUrl} 
            alt={logo.name} 
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'contain',
              pointerEvents: 'none'
            }} 
          />
        </Html>

        {/* Category / Name label below */}
        {hovered && (
          <Text
            position={[0, -0.55, 0.05]}
            fontSize={0.12}
            color="#00E5FF"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            {logo.name}
          </Text>
        )}
      </Billboard>
    </group>
  );
}

interface SphereProps {
  activeCategory: string;
  dragRef: React.MutableRefObject<{ velocityX: number; velocityY: number }>;
}

function Sphere({ activeCategory, dragRef }: SphereProps) {
  const sphereGroupRef = useRef<THREE.Group>(null);

  const filteredLogos = useMemo(() => {
    if (activeCategory === 'all') return techLogos;
    return techLogos.filter((logo) => logo.category === activeCategory);
  }, [activeCategory]);

  const positions = useMemo(() => {
    return fibonacciSphere(filteredLogos.length, 3.2);
  }, [filteredLogos.length]);

  useFrame(() => {
    if (!sphereGroupRef.current) return;
    const { snx, sny } = useMouseStore.getState();
    const { velocityX, velocityY } = dragRef.current;

    sphereGroupRef.current.rotation.y += 0.003 + snx * 0.008 + velocityX;
    sphereGroupRef.current.rotation.x = sny * 0.3 + velocityY;

    dragRef.current.velocityX *= 0.92;
    dragRef.current.velocityY *= 0.92;
  });

  return (
    <group ref={sphereGroupRef}>
      {filteredLogos.map((logo, i) => (
        <LogoNode
          key={`${logo.name}-${i}`}
          position={positions[i] || new THREE.Vector3(0, 0, 0)}
          logo={logo}
        />
      ))}
    </group>
  );
}

interface TechLogoSphereProps {
  activeCategory?: string;
}

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
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export function TechLogoSphere({ activeCategory = 'all' }: TechLogoSphereProps) {
  const dragRef = useRef({ velocityX: 0, velocityY: 0 });
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!lastPointerRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    dragRef.current.velocityX = dx * 0.002;
    dragRef.current.velocityY = dy * 0.001;
  }, []);

  const handlePointerUp = useCallback(() => {
    lastPointerRef.current = null;
  }, []);

  return (
    <div
      className="w-full h-full relative min-h-[320px] touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-muted font-mono">3D Sphere Failed to Load</div>}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1.5] : [1, 2]}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#7C4DFF" intensity={0.8} />
          <Sphere activeCategory={activeCategory} dragRef={dragRef} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
