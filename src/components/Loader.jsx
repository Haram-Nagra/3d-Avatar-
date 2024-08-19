import {Html,useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} =useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p className='font-bold text-white mt-40 text-medium'>
          {progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader