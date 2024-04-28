
const ReusableComponent = ({fromTitle ,handlesSubmit, submitBtnText ='Submit' , children}) => {
 
    const handleLocalSubmit = e => {
        e.preventDefault();

        const data ={
            name : e.target.name.value,
            email : e.target.email.value,
            pass : e.target.password.value
        }
        handlesSubmit(data)
    }
     
    return (
        <div>  
             {children}
              <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email"  name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
             </form>
        </div>
    );
};

export default ReusableComponent;