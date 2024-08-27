import React,{ createContext,useContext} from "react";
import { Howl } from "howler";

const AudioContext=createContext();
export const AudioProvider=({children})=>{
    const ClickSound=()=>{
        const clickSound = new Howl({
          src: ["/click.mp3"], //here we ued "[]" to make it a array and can add multiple sounds here
          volume: 0.5,
          rate: 4,
        });
        clickSound.play();
    }
return(<AudioContext.Provider value={{ClickSound}}>
{children}
</AudioContext.Provider>);
}

export const useAudio=()=>{
    return useContext(AudioContext)
}

