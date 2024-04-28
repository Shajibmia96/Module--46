
// import StateFullFrom from '../Component/SimpleFrom/StateFullFrom'
// import HooksFrom from '../Component/HooksFrom/HooksFrom'
import ReusableComponent from '../Component/ReusableComponent'
// import RefFrom from '../Component/SimpleFrom/RefFrom'
import './App.css'
// import SimpleFrom from '../Component/SimpleFrom/SimpleFrom'

function App() {

  const handlesSingUpSubmit = data => {
   
    console.log("Sing up " , data)
}

 const handlesProfileSubmit = data =>{
    
     console.log('update profile ', data)
 }
   return (
    <>
      <h1>Simple from</h1>
     {/* <SimpleFrom></SimpleFrom> */}
     {/* <StateFullFrom></StateFullFrom> */}
     {/* <RefFrom></RefFrom> */}
     {/* <HooksFrom></HooksFrom> */}
      <ReusableComponent fromTitle={'Sing up'}
                         handlesSubmit={handlesSingUpSubmit}
      >
        <div>
          <h2>Sing up</h2>
          <p>Please sing up first</p>
        </div>
      </ReusableComponent>
      <ReusableComponent fromTitle={'Profile Update'} 
                         submitBtnText={'Update'} 
                         handlesSubmit ={handlesProfileSubmit}

      >
        <div>
          <h2>Update profile</h2>
          <p>Keep your profile update</p>
        </div>
      </ReusableComponent>
    </>
  )
}

export default App
