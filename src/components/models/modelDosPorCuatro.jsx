/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import escena from '../../assets/ConfiPlantModelV1Painted.glb'


const DosPorCuatro = (props) => {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF(escena);
  return (
    <group ref={modelRef} {...props}>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

export default DosPorCuatro;
