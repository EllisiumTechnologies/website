'use client'

import { Canvas } from '@react-three/fiber'
import { 
  PerspectiveCamera,
  Environment,
  Float,
  Stars,
  OrbitControls
} from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import AbstractShapes from './AbstractShapes'
import ParticleField from './ParticleField'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CameraController() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    })
  }

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x = THREE.MathUtils.lerp(
        cameraRef.current.position.x,
        mousePosition.x * 2,
        0.05
      )
      cameraRef.current.position.y = THREE.MathUtils.lerp(
        cameraRef.current.position.y,
        mousePosition.y * 1.5,
        0.05
      )
      cameraRef.current.lookAt(0, 0, 0)
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 10]}
      fov={60}
    />
  )
}

export default function Scene3D() {
  return (
    <Canvas
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#050505']} />
      
      <CameraController />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf00ff" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ff00f5"
      />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        <AbstractShapes />
      </Float>
      
      <ParticleField count={500} />
      
      <Environment preset="night" />
      
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Noise opacity={0.05} />
      </EffectComposer>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  )
}
