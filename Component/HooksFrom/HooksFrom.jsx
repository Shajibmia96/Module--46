
import useInputState from "../../src/Hooks/useInputState";

const HooksFrom = () => {
    //   const [name, handleNameChange] = useInputState('Shajib')
    //   const [email , handleEmailChange] = useInputState('')
    //   const [pass , handlesPassChange] = useInputState('')
      const phoneState = useInputState('')
     const handlesSubmit = e =>{
        // console.log("This output from " , name)
        // console.log(email , pass)
        console.log(phoneState.value)
        e.preventDefault();
         
     }
    return (
        <div>
              <form onSubmit={handlesSubmit}>
                {/* <input 
                value={name} onChange={handleNameChange}
                type="text" name="name" id="" />
                <br /> */}
                <input {...phoneState} type="text" name="phone" id="" />
                <br />
                {/* <input 
                value={email} onChange={handleEmailChange}
                type="email"  name="email" id="" />
                <br />
                <input 
                value={pass} onChange={handlesPassChange}
                type="password" name="password" id="" /> */}
                <br />
                <input type="submit" value="Submit" />
             </form>
        </div>
    );
};

export default HooksFrom;