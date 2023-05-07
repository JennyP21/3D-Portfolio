import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Shoe from "../3D Models/Shoe"

const ProductDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6} >
                <Shoe />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default ProductDesign