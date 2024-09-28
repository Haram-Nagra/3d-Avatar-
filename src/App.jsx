import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;

// jwt  token
// excess token details 30 min

// refresh backend mei chala jayega 5 days

// logi ka store bnana and log out ka store bnana
// log out local storage  clear
