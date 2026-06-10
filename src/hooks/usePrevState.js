import { useEffect, useRef } from "react";  

const usePrevState =(state)=>{

    const ref =  useRef();

    useEffect(()=>{
        ref.current = state
    })
    console.log ("the previous/current term ", ref.current);
    return ref.current;


}


export default usePrevState;





