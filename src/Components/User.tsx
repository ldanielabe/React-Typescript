import { useState } from "react";


export const User = () => {

    interface User {
        uid: String;
        name: String;
    }

    const tempUser : User ={
        uid: '1111',
        name: 'Laura'
    }

    const [user, setuser] = useState<User>();

    const login = () =>{
        setuser({
            uid: '123ABC',
            name: 'Daniela'
        })
    }

  return (
    <div className="mt-5">
        <h3>Usuario: UseState</h3>

        <button
        className="btn btn-outline-primary"
        onClick={login}
        >
            Login
        </button>

       {(!user) ?
         <pre>Usuario no existe!</pre>
       : <pre>
          {JSON.stringify(user)}
         </pre>
       }

    </div>
  );
};
