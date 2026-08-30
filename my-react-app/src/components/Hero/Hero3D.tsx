import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const IcosahedronMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const speedRef = useRef(0.003);
  const hoverTimer = useRef<number | null>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    // Y-axis slow rotation
    groupRef.current.rotation.y += speedRef.current;
    // Slight X-axis rotation for 3D feel
    groupRef.current.rotation.x += 0.001;

    // Floating animation
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.25;
  });

  const handlePointerOver = () => {
    setHovered(true);
    speedRef.current = 0.008;
    
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
    }
    
    hoverTimer.current = window.setTimeout(() => {
      speedRef.current = 0.003;
    }, 1000);
  };

  return (
    <group 
      ref={groupRef} 
      onPointerOver={handlePointerOver}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Solid Inner Body */}
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color="#0F172A"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Wireframe Outer Body */}
      <mesh>
        <icosahedronGeometry args={[2.02, 1]} />
        <meshBasicMaterial 
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
};

const MouseLight: React.FC = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (!lightRef.current) return;
    // Map screen mouse vector to 3D world space
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    lightRef.current.position.set(x, y, 2.5);
  });

  return (
    <pointLight 
      ref={lightRef} 
      color="#3B82F6" 
      intensity={2.5} 
      distance={12} 
      decay={1.5}
    />
  );
};

export const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-full relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.4} />
        
        {/* Fixed lights */}
        <pointLight position={[5, 5, 4]} color="#8B5CF6" intensity={1.5} distance={15} />
        
        {/* Dynamic lights */}
        <MouseLight />
        
        {/* Main Mesh */}
        <IcosahedronMesh />
      </Canvas>
    </div>
  );
};
export default Hero3D;
