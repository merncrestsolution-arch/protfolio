import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useMouseStore } from '../../store/mouseStore';
import { Server, Database, Cloud, Globe, Zap } from 'lucide-react';

interface ServiceNodeData {
  name: string;
  position: [number, number, number];
  color: string;
  description: string;
  icon: any;
}

const AWS_SERVICES: ServiceNodeData[] = [
  { name: 'Route53', icon: Globe, position: [0, 2.3, 0], color: '#E7157B', description: 'DNS & Domain Routing' },
  { name: 'CloudFront', icon: Cloud, position: [0, 1.1, 0], color: '#8C4FFF', description: 'CDN & Edge Network Caching' },
  { name: 'EC2', icon: Server, position: [0, -0.1, 0], color: '#FF9900', description: 'Compute & Application Host' },
  { name: 'S3', icon: Database, position: [2.0, -0.1, 0], color: '#569A31', description: 'Static Assets & Logs Bucket' },
  { name: 'RDS', icon: Database, position: [0, -1.5, 0], color: '#336791', description: 'PostgreSQL Relational DB' },
  { name: 'Lambda', icon: Zap, position: [-2.0, -0.1, 0], color: '#FF9900', description: 'Serverless Task Workers' },
];

const CONNECTIONS = [
  { startIdx: 0, endIdx: 1 }, // Route53 -> CloudFront
  { startIdx: 1, endIdx: 2 }, // CloudFront -> EC2
  { startIdx: 2, endIdx: 3 }, // EC2 -> S3
  { startIdx: 2, endIdx: 4 }, // EC2 -> RDS
  { startIdx: 2, endIdx: 5 }, // EC2 -> Lambda
];

function ServiceNode({ node, onHover }: { node: ServiceNodeData; onHover: (desc: string | null) => void }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Subtle float animation
      const floatVal = Math.sin(clock.elapsedTime * 1.5 + node.position[0]) * 0.03;
      meshRef.current.position.y = node.position[1] + floatVal;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2 + Math.sin(clock.elapsedTime * 3) * 0.02);
      } else {
        meshRef.current.scale.setScalar(1.0);
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={node.position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(node.description);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Outer bounding mesh ring for glow styling */}
      {hovered && (
        <mesh position={[0, 0, 0]}>
          <circleGeometry args={[0.5, 32]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.15} />
        </mesh>
      )}

      {/* Main neon icon */}
      <Html transform center scale={hovered ? 0.6 : 0.5} zIndexRange={[100, 0]}>
        <div 
          className="flex items-center justify-center p-4 rounded-full bg-surface/80 border border-white/10 backdrop-blur-sm cursor-pointer"
          style={{ 
            color: node.color, 
            boxShadow: hovered ? `0 0 30px ${node.color}66, inset 0 0 20px ${node.color}33` : `0 0 10px ${node.color}33`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <node.icon size={48} strokeWidth={hovered ? 2.5 : 2} style={{ filter: `drop-shadow(0 0 8px ${node.color})` }} />
        </div>
      </Html>

      {/* Node label */}
      <Text
        position={[0, 0.45, 0]}
        fontSize={0.16}
        color="#FFFFFF"
        anchorX="center"
        anchorY="bottom"
        fontWeight="bold"
      >
        {node.name}
      </Text>
    </group>
  );
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const particleRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!particleRef.current) return;
    
    // Set initial position
    particleRef.current.position.set(start[0], start[1], start[2]);

    // Animate particle position from start to end continuously with random offset delay
    const tween = gsap.to(particleRef.current.position, {
      x: end[0],
      y: end[1],
      z: end[2],
      duration: 2.5 + Math.random() * 0.5,
      repeat: -1,
      ease: 'none',
      delay: Math.random() * 1.5,
    });

    return () => {
      tween.kill();
    };
  }, [start, end]);

  return (
    <group>
      {/* Connection link path */}
      <Line
        points={[start, end]}
        color="#00E5FF"
        lineWidth={1.5}
        transparent
        opacity={0.3}
      />
      {/* Moving particle along path */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#00FF94" toneMapped={false} />
      </mesh>
    </group>
  );
}

function Diagram({ onHover }: { onHover: (desc: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const { snx } = useMouseStore.getState();
    // Entire diagram slowly rotates. Mouse-X accelerates/reverses rotation.
    groupRef.current.rotation.y = clock.elapsedTime * 0.08 + snx * 0.3;
  });

  return (
    <group ref={groupRef}>
      {CONNECTIONS.map((conn, idx) => (
        <ConnectionLine
          key={idx}
          start={AWS_SERVICES[conn.startIdx].position}
          end={AWS_SERVICES[conn.endIdx].position}
        />
      ))}
      {AWS_SERVICES.map((node) => (
        <ServiceNode key={node.name} node={node} onHover={onHover} />
      ))}
    </group>
  );
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

export function AWSDiagram() {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-full relative min-h-[450px]">
      {/* Floating HTML Tooltip */}
      {tooltip && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-surface/90 border border-primary/30 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-mono text-primary shadow-glow-primary z-10 transition-opacity duration-300">
          {tooltip}
        </div>
      )}
      
      <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-muted font-mono">3D Cloud Architect Failed to Load</div>}>
        <Canvas
          camera={{ position: [0, 0.2, 8.0], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#7C4DFF" intensity={0.8} />
          <Diagram onHover={setTooltip} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
