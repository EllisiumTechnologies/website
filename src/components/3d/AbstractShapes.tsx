'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei'

interface ShapeProps {
  position: [number, number, number]
  color: string
  size?: number
  shape: 'torus' | 'icosahedron' | 'octahedron' | 'dodecahedron'
}

function InteractiveShape({ position, color, size = 1, shape }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    })
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mousePosition.y * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.5
      
      const scale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[size, size * 0.4, 32, 64]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[size, 1]} />
      case 'octahedron':
        return <octahedronGeometry args={[size]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[size]} />
      default:
        return <sphereGeometry args={[size, 32, 32]} />
    }
  }, [size, shape])

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      <MeshDistortMaterial
        color={color}
        roughness={0.1}
        metalness={0.8}
        distort={hovered ? 0.4 : 0.2}
        speed={2}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
    </mesh>
  )
}

import { useState } from 'react'

export default function AbstractShapes() {
  const shapes: ShapeProps[] = [
    { position: [3, 1, -2], color: '#00f5ff', size: 1.2, shape: 'icosahedron' },
    { position: [-3, -1, -1], color: '#bf00ff', size: 0.8, shape: 'octahedron' },
    { position: [0, 2, -3], color: '#ff00f5', size: 0.6, shape: 'dodecahedron' },
    { position: [-2, 0, 0], color: '#00ff88', size: 0.5, shape: 'torus' },
    { position: [2, -2, -2], color: '#0088ff', size: 0.7, shape: 'icosahedron' },
  ]

  return (
    <group>
      {shapes.map((shape, index) => (
        <InteractiveShape key={index} {...shape} />
      ))}
    </group>
  )
}
