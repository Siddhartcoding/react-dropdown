import "./styles.css";
 import { data } from "./data";
 import { useValue } from "./dropdownContex";
export default function DropDown (){
    const {handleClick}= useValue();
return (

 <div className="dropdown">
    {data.map((text)=>(
      <p key={text.id} onClick={()=>handleClick(text.text)}>
         {text.text}
      </p>

   ) )}
  </div>
    
)
} 