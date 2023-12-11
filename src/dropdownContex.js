import { createContext , useContext, useState } from "react";

const dropdownContext =createContext ();

 export function useValue (){
    const value = useContext(dropdownContext);
    return value;
 }
  
function DropDownContext ({children}){

const  [show , setShow] = useState(false);
const [showText , setShowText] = useState("");
 
  const handleMouseEnter = ()=>{
    setShow(true);
    // setText([...data]);
  }
   const handleClick = (text)=>{
  setShowText(text);
     
   }
   function handleShow (){
    setShow(false);
   }
    return (
        <dropdownContext.Provider
         value={{show, handleMouseEnter, 
         handleClick, showText, handleShow} }>
        {children}
       
        </dropdownContext.Provider>
    )
}
export {dropdownContext};
export default DropDownContext;