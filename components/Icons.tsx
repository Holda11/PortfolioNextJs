"use client"
import {FaReact, FaEdit, FaFacebook} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Icons() {
    return(
        <>
        <ul className="Icons">
            <IconContext.Provider value={{size: "34px", color: "black"}}>
            <li><FaReact/></li>    
            <li><FaEdit/></li>    
            <li><FaFacebook/></li>    
            </IconContext.Provider>
            </ul> 
        </>
    )

}