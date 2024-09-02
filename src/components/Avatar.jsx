import { useFBX, useGLTF,useAnimations } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef ,useState } from "react";
import { SkeletonUtils } from "three-stdlib";

export function Avatar(props) {

  const {headFollow} = useControls({
    headFollow:false,
  });

  const group = React.useRef();
  const { scene } = useGLTF("models/66ce0f7728192d695397335d.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations : typingAnimation} =useFBX("animations/Typing.fbx");

  typingAnimation[0].name = "Typing";
  const {actions} = useAnimations(typingAnimation, group);

  const [isHeadFollowing, setIsHeadFollowing] = useState(headFollow);

  const changeMaterial = () => {
    if (isHeadFollowing) {
      materials.Wolf3D_Outfit_Top.color.set(0xff0000); // Change to red or any color/material you want
    } else {
      materials.Wolf3D_Outfit_Top.color.set(0x00ff00); // Change back to green or any color/material you want
    }
  };

  useFrame((state)=>
  {
    if(headFollow) {
    group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    setIsHeadFollowing(headFollow);
    changeMaterial();
  });


  useEffect(() => {
    // Ensure that the animation is started only when the actions are available
    if (actions && actions.Typing) {
      actions["Typing"].reset().play();
    }
  }, [actions]);


  

  return (
    <group {...props} ref ={group} dispose={null}>
      <group rotation-x = {-Math.PI/2}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      </group>
      </group>
  );
}

useGLTF.preload("public/models/66ce0f7728192d695397335d.glb");

