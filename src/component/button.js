import React from 'react'
import { useAudio } from '../context/audioContext';

const Home = () => {
    const {ClickSound}=useAudio();
    const handleClick=()=>{
        ClickSound();
    }
  return (
    <div className=' bg-gray-300 h-[100vh] flex items-center justify-end '>
      <button className='m-10 border-2 border-violet-300 bg-white rounded-md px-2 text-violet-600 hover:text-white font-mono hover:bg-violet-800 hover:shadow-md hover:shadow-violet-950' onClick={handleClick}>click me</button>
    </div>
  );
}

export default Home