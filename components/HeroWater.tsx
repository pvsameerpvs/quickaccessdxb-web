"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

type WaterPlaneProps = {
  image: string;
};

// Shaders outside component so they are not recreated each render
const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vUv = uv;

    float dist = distance(uv, uMouse);
    float ripple = sin(dist * 40.0 - uTime * 6.0) * 0.03 / (dist * 40.0 + 0.0001);

    vec3 newPosition = position;
    newPosition.z += ripple * 20.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // subtle refraction wobble
    uv.y += sin(uv.x * 10.0 + uTime * 2.0) * 0.01;
    uv.x += cos(uv.y * 10.0 + uTime * 2.0) * 0.01;

    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

function WaterPlane({ image }: WaterPlaneProps) {
  const mesh = useRef<THREE.Mesh | null>(null);
  const texture = useLoader(THREE.TextureLoader, image);

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }).current;

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!e.uv) return;
    setMouse({ x: e.uv.x, y: e.uv.y });
  };

  return (
    <mesh ref={mesh} onPointerMove={handlePointerMove}>
      {/* 16x9 plane; tweak if you want */}
      <planeGeometry args={[16, 9, 300, 300]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={false}
      />
    </mesh>
  );
}

export default function HeroWater({ image }: { image: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <WaterPlane image={image} />
    </Canvas>
  );
}
