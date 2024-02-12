"use client"

// components/ThreeVisualizer.js
import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { type Mesh } from "three"

const ThreeVisualizer = () => {
  const mountRef = useRef<Mesh>(null!)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (mountRef.current !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      mountRef.current?.appendChild(renderer.domElement)
    }

    // Adding a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 15

    // Animation loop
    renderer.render(scene, camera)

    // Cleanup on component unmount
    return () => mountRef.current.removeChild(renderer.domElement)
  }, [])

  return <div ref={mountRef}></div>
}
export default ThreeVisualizer
