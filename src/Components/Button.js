import React from "react";


// props => properties

const Button = ({btnName, paraText, color})=>{ 
    // // props is a read only object
    //  console.log(props) // props = {btnName:"Apple", paraText:"I am green in color"}

    //  props.btnName = "Banana"

    return(
        <div style={{backgroundColor: color}}>
            <button>{btnName}</button>
            <span>{paraText}</span>
        </div>
    )
}

export default Button   