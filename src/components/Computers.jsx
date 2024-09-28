import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 0, 0]}
        intensity={100}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={[1024, 1024]} // Use array for better resolution
      />
      <primitive
        object={computer.scene}
        scale={ 0.15 }
        position={[-0.35,0.73, 1]}
        rotation={[0,39.3,0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      <Preload all />
    </Canvas>
  );
};

export default Computers;
