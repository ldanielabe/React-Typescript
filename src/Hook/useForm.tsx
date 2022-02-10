import { ChangeEvent, useState } from "react";

// export function useForm<T>(initState: T){
export const useForm = <T extends Object>(initState: T) => {

    const [form, setform] = useState(initState);
    
    const handleChange = (/*event*/{ target }: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = target
        console.log(name, value)
    
        setform({
          ...form,
          [name]: value
        })
    
    }

    return {
        form,
        handleChange,
        ...form,
    }
};
