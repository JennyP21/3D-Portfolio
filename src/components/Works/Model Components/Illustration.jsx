import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import IPhone from "../3D Models/Iphone"

const Illustration = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6} >
                <IPhone />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default Illustration;