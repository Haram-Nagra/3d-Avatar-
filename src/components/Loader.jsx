import { Html, useProgress } from '@react-three/drei';
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      {/* Progress Line */}
      <div className="w-[1500px] h-2 bg-gray-300">
        <div
          className="h-full bg-[#190101]"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Rotating Box */}
      <div className="flex flex-col items-center mt-4">
        {/* Loading Text */}
        <p className="font-bold text-2xl text-[#190101] mt-8">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
