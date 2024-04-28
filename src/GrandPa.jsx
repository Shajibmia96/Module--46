import Dad from "./Dad";
import Uncle from '/Component/Uncle'
import Aunty from "/Component/Antry"
import { createContext } from "react";
const GrandPa = () => {

    const accessContext = createContext('diamond')
    return (
        <div>
               
               <accessContext.Provider value="Diamond">
               <section>
               <Dad></Dad>
               <Uncle></Uncle>
               <Aunty></Aunty>
               </section>
               </accessContext.Provider>
               
        </div>
    );
};

export default GrandPa;