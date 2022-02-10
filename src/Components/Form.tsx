import { useForm } from '../Hook/useForm';

interface formData{
  email: string;
  name:  string;
  years: number;
}

export const Form = () => {

  const {form, handleChange, email, name, years} = useForm({
    email:'lauridani1@gmail.com',
    name:'Daniela',
    years: 24
  })

  // const {email, name, years} = form

  return (
  <form autoComplete="off">
    <div className="mb-3">
        <label>Email</label>
        <input 
        type="email" 
        value={email}
        className="form-control" 
        name="email" 
        onChange={ handleChange }
        />
    </div>

    <div className="mb-3">
        <label>Name</label>
        <input 
        type="text" 
        className="form-control" 
        name="name" 
        onChange={ handleChange }
        value={name}
        />
    </div>

    <div className="mb-3">
        <label>Years</label>
        <input 
        type="number" 
        className="form-control" 
        name="years" 
        onChange={ handleChange }
        value={years}
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
