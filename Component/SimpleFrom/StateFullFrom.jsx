import { useState } from "react";

const StateFullFrom = () => {

    const [email , setEmail]= useState(null)
    const [pass , setPass] = useState(null)
    const [error , setError] = useState('')
     const handlesSubmit = e => {
           e.preventDefault(),
           console.log(email)
           console.log(pass)
           if(pass.length < 6){
            setError("you must be pass 6 characters")
        }
        else{
           error('')
        }
     }

     const handleEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)
     }

     const handlesPassChange = e => {
          console.log(e.target.value)
          setPass(e.target.value)
     }
    return (
        <div>
             <form onSubmit={handlesSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input  
                onChange={handleEmailChange}
                type="email" required name="email" id="" />
                <br />
                <input 
                 onChange={handlesPassChange}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
             </form>

             {
                error && <p>{error}</p>
             }
        </div>
    );
};

export default StateFullFrom;