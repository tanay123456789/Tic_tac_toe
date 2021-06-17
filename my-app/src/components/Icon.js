import React from "react"
import {FaTimes,FaRegCircle} from "react-icons/fa"

//component responsible for returning icon when user click button
const Icon= ({name})=>{
    switch(name){
        case 'circle':
            return <FaRegCircle className="icons"/>
        case 'cross':
            return <FaTimes className="icons"/>
        
        default:
            return " "
            
            
    }
    
};

export default Icon;
