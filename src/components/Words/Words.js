import React from "react";
import "./Words.css";


const Lorem = require('react-lorem-component');

const handleLength = (base) => {
    switch(base) {
        case '1st Base':
            return 3;
        case '2nd Base':
            return 5;
        case '3rd Base':
            return 7;  
            default:
            return 3  
    }

}

const Words = props => {
        return(
            <div className="words">
                <Lorem words={props.words} count={props.numericInput} paragraphUpperBound={handleLength(props.length)}/>   
            </div>
        );
    }

 export default Words;