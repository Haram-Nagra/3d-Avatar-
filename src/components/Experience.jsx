import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Canvas } from '@react-three/fiber';
import Computers from "./Computers"


export const Experience = () => {
    return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        {/* <color attach="background" args={["black"]} /> */}
            <OrbitControls />
            <group position-y={-1}>
                <Computers/>
                <Avatar/>
            </group>
            <ambientLight intensity={3}/>
        </Canvas>
    );
};