import { ContactShadows, OrbitControls, Sky, Environment, useProgress, Html, Preload } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import Computers from "./Computers";
import { AnimatedHeading } from "./Heading";
import { Suspense } from "react";
import CanvasLoader from "./Loader";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enablePan={false} // Disable panning
          enableZoom={false} // Allow zooming
          minPolarAngle={Math.PI / 2} // Restrict vertical rotation (upward limit)
          maxPolarAngle={Math.PI / 2}
        />
        <Sky />
        <Environment preset="sunset" />
        <Html position={[0, 1, 0]} center>
          <AnimatedHeading />
        </Html>
        <group position-y={-1}>
          <ContactShadows
            opacity={0.4}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
          <Avatar animation={animation} />
          {animation === "Typing" && (
            <group>
              <mesh scale={[0.8, 0.47, 0.8]} position={[0, 0.25, -0.09]}>
                <boxGeometry />
                <meshStandardMaterial color="#f0f0f0" />
              </mesh>
              <Computers />
            </group>
          )}
          <mesh scale={1} rotation-x={-Math.PI * 0.5} position={[0, -0.001, 0]}>
            <planeGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
        <ambientLight intensity={3} />
      </Suspense>
      <Preload all />
    </>
  );
};
