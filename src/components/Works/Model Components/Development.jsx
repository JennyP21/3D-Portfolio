import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Atom from '../3D Models/Atom'
import styled from 'styled-components'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 180px;
    right: 100px;
`

const Development = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6} >
                    <Atom />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and ensuring your product is a market success.
            </Desc>
        </>
    )
}

export default Development