import React, { useEffect, useRef, useState } from "react";
import { useAudio } from "../context/audioContext";
import { createSwapy } from "swapy";
import SwapyItems from "./swapyItems";

const Home = () => {
  const { ClickSound } = useAudio();
  const containerRef = useRef(null);
  const swapyRef = useRef(null);
  const [on,setOn]=useState(false);

  useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        animation: "dynamic",
      });
    }
  }, []);

  const handleClick = () => {
    ClickSound();
  
    if (swapyRef.current) {
      const newState = !on;
      swapyRef.current.enable(newState);
      setOn(newState);
    }
  };

  return (
    <div className="bg-gray-300 h-[100vh] flex flex-col items-center justify-center">
      <button
        className="m-10 border-2 border-violet-300 bg-white rounded-md px-2 text-violet-600 hover:text-white font-mono hover:bg-violet-800 hover:shadow-md hover:shadow-violet-950"
        onClick={handleClick}
      >
{on?  (<>disable swap</>):(<>enable swap</>)}
    
      
      </button>
      <div ref={containerRef}>
        <SwapyItems />
      </div>
    </div>
  );
};

export default Home;
