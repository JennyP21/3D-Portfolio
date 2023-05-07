/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 social.gltf --transform
Author: aniljaco (https://sketchfab.com/aniljaco)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/social-media-icons--anil-jaco-937dbb8864d748ca8fd5c10ac3042be6
Title: Social Media Icons_ Anil Jaco
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/social.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Blue} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Green} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Pink} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Pink} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.material_5} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Twitter} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.material_12} />
      </group>
    </group>
  )
}

useGLTF.preload('/social-transformed.glb')
