import React from "react" 
import Button from "./Components/Button"


const App = ()=>{
    let obj = {color:"red", textAlign:"center"}
    let a = 100

    return(
         <div>
            <h1> Hello , Abhishek</h1>
            <p>I am dancing on the floor</p>

            <h2>Favourite Fruits</h2>
           

            <Button  btnName="Apple" 
             paraText="I am green in color"
              color="green"
             />

            <Button
               btnName="Mango"
                paraText="I am yellow in color"
                color="yellow"
            />

            <Button
                btnName="Orange"
                  paraText="I am orange in color"
                  color="orange"
            />
            

            

            
            
          </div>
        
    )
       
} 





export default App