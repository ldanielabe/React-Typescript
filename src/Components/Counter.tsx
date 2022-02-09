import { useState } from 'react';

//rafc
export const Counter = () => {

    const [counter, setcounter] = useState(0);

    const incrementar = (numero: number = 1):void =>{
        setcounter(counter+numero)
    }

  return (
    <div className="mt-5">
        <h3>Counter: UseState</h3>
        <p>Valor: {counter}</p>

        <button 
        className='btn btn-outline-primary mt-2' 
        onClick={()=>incrementar(1)}>
            +1
        </button>

        <button 
        className='btn btn-outline-primary mt-2' 
        onClick={()=>incrementar(2)}>
            +2
        </button>

        <button 
        className='btn btn-outline-danger mt-2' 
        onClick={()=>setcounter(0)}>
            Reset
        </button>

    </div>
  );
};
