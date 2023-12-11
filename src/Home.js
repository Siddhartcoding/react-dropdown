import React from "react";
import { useValue } from "./dropdownContex";
import DropDown from "./DropDown";
 function Home (){
const {show, handleMouseEnter, showText ,handleShow} = useValue();
    return (
        <div className="app">
        <div className=" home" onClick={handleShow}>
        <h1>Q. Should you use a Dropdown ?</h1>
        <button onMouseEnter={handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            show ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
        
      </button>
      {show? <DropDown/>:''}
        </div>
        <p className="'ans-p"> Ans.{showText}</p>
        </div>
    )

 }
 export default Home;