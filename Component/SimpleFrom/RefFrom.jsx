import { useEffect, useRef, useState } from "react";

const RefFrom = () => {
    const [error , setError] = useState('')
    const nameRef = useRef(null)
    const passRef = useRef(null)
    const emailRef = useRef(null)

   

      useEffect ( () => {
                  nameRef.current.focus();
          
                    } ,[])
    const handlesSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(passRef.current.value)
        console.log(emailRef.current.value)
        const passLength = passRef.current.value.length
        if( passLength < 7){
            setError("You password must be 7 characters")
        }else{
            setError('')
        }
    }
    return (
        <div>
             <form onSubmit={handlesSubmit}>
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input ref={emailRef} defaultValue={'shjaibahamed@gmail.com'} type="email"  name="email" id="" />
                <br />
                <input ref={passRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
             </form>
             {
                error && <p>{error}</p>
             }
        </div>
    );
};

export default RefFrom;