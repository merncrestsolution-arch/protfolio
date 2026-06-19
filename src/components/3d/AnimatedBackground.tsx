import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { prefersReducedMotion } from '@/utils/animations';

function Nebula() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(3, 6), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#7C4DFF'),
        emissive: new THREE.Color('#00E5FF'),
        emissiveIntensity: 0.12,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    []
  );

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.04;
      meshRef.current.rotation.y += delta * 0.06;
    }
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

/**
 * Slow-rotating wireframe nebula used as an ambient page background layer.
 */
export function AnimatedBackground() {
  if (prefersReducedMotion()) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20"
      style={{
        transform:
          'scale(1.05) translate(calc(var(--mouse-x, 0) * 8px), calc(var(--mouse-y, 0) * 8px))',
        transition: 'transform 0.2s ease-out',
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00E5FF" />
        <Nebula />
      </Canvas>
    </div>
  );
}
