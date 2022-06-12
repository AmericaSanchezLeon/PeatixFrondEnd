import React from "react";   

  export default function CelToFar(){
    const [temp, updateTemp] = React.useState({ f: 0, c: 0 })
  
    const updateC = ev => updateTemp({
      c: ev.target.value,
      f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
    })
    
    const updateF = ev => updateTemp({
      c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
      f: ev.target.value
    })
  
    return(
      <div id="container">
        <h1>Temperature converter</h1>
        <p>Hi there, please enter the degrees in the desired input, and it will automatically convert it!</p>
        <br/>
        <div id="box1">
          <h2>Celsius</h2>
          <input
              type = "number"
              value = {temp.c}
              onChange = {updateC} >
            </input>
        </div>
        <div id="box2">
            <h2>Fahrenheit</h2>
            <input
              type = "number" 
              value = {temp.f} 
              onChange = {updateF}>
            </input>
            </div>
      </div>
    )
  }
 