import { useState } from "react";
import { Timer } from "./Timer";

export const TimerFather = () => {

  const [milisegundos, setmilisegundos] = useState(1000);

  return(
  <>
    <span>Milisegundos {milisegundos}</span>

    <button className="btn btn-outline-success" onClick={()=> setmilisegundos(1000)}>
      1000
    </button>

    <button className="btn btn-outline-success" onClick={()=> setmilisegundos(2000)}>
      2000
    </button>

    <Timer milisegundos={milisegundos}/>
  </>
  );
};
