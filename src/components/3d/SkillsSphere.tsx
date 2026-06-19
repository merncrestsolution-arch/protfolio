import { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasErrorBoundary } from './ErrorBoundary';
import type { Skill, SkillCategory } from '@/data/skills';
import { prefersReducedMotion } from '@/utils/animations';

interface SkillsSphereProps {
  skills: Skill[];
  activeCategory: SkillCategory;
}

interface PlacedSkill extends Skill {
  position: THREE.Vector3;
}

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    points.push(
      new THREE.Vector3(
        Math.cos(phi) * r * radius,
        y * radius,
        Math.sin(phi) * r * radius
      )
    );
  }
  return points;
}

function SkillLabel({
  skill,
  active,
}: {
  skill: PlacedSkill;
  active: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const scale = hovered ? 1.3 : active ? 1 : 0.7;

  return (
    <Billboard position={skill.position}>
      <Text
        fontSize={0.32}
        scale={scale}
        color={hovered ? '#00FF94' : active ? '#00E5FF' : '#5b6478'}
        anchorX="center"
        anchorY="middle"
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        outlineWidth={hovered ? 0.01 : 0}
        outlineColor="#00FF94"
      >
        {skill.name}
      </Text>
    </Billboard>
  );
}

function SphereContents({ skills, activeCategory }: SkillsSphereProps) {
  const groupRef = useRef<THREE.Group>(null);

  const placed = useMemo<PlacedSkill[]>(() => {
    const positions = fibonacciSphere(skills.length, 3.2);
    return skills.map((skill, i) => ({ ...skill, position: positions[i] }));
  }, [skills]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {placed.map((skill) => (
        <SkillLabel
          key={skill.name}
          skill={skill}
          active={skill.category === activeCategory}
        />
      ))}
    </group>
  );
}

export function SkillsSphere({ skills, activeCategory }: SkillsSphereProps) {
  return (
    <CanvasErrorBoundary
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-mono text-sm text-muted">Skills visualization unavailable.</p>
        </div>
      }
    >
      <div
        role="img"
        aria-label="Rotating 3D sphere of skill names"
        className="h-full w-full"
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, prefersReducedMotion() ? 1 : 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.8} />
          <Suspense fallback={null}>
            <SphereContents skills={skills} activeCategory={activeCategory} />
          </Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
