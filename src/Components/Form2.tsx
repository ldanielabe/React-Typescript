import { ChangeEvent, useState } from "react";
import { useForm } from "../Hook/useForm";


export const Form2 = () => {

  const {form, handleChange, codigo, ciudad} = useForm({
    codigo:'ABC',
    ciudad:'Bogota'
  })
  
  return (
  <form autoComplete="off">
    <div className="mb-3">
        <label>Codigo Postal</label>
        <input 
        type="text" 
        className="form-control" 
        name="codigo" 
        onChange={ handleChange }
        value={codigo}
        />
    </div>

    <div className="mb-3">
        <label>Ciudad</label>
        <input 
        type="text" 
        className="form-control" 
        name="ciudad" 
        onChange={ handleChange }
        value={ciudad}
        />
    </div>

    {/* <button 
    className="btn btn-outline-secundary"
    onClick={()=> setform()}>
      Save
    </button> */}

    <pre>{JSON.stringify(form)}</pre>
  </form>);
};
