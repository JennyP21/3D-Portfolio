import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Social from "../3D Models/Social"

const SocialMedia = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6} >
                <Social />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default SocialMedia