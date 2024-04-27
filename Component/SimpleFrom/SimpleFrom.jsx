
const SimpleFrom = () => {
    const handlesSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log(e.target.password.value)
        console.log('From submmited')
    }
    return (
        <div>
             <form onSubmit={handlesSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="email" required name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
             </form>
        </div>
    );
};

export default SimpleFrom;