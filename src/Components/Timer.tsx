import { useEffect, useRef } from "react";
import { useState } from "react";

type timeArgs = {
  milisegundos: number,
  segundos?: number, // ? no es obligatorio
}

export const Timer = ({milisegundos}:timeArgs) => {

  const [segundos, setsegundos] = useState(0);
  
  const ref = useRef<NodeJS.Timer>();

  useEffect(()=>{
    
    console.log('UseEffect')

    ref.current && clearInterval(ref.current)

    ref.current = setInterval(()=> setsegundos(s => s + 1), milisegundos)
  
  }, [milisegundos])


  return(
  <>
    <h4>Timer: <small>{segundos}</small> </h4>
  </>
  );
};
