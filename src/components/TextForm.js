import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","Success");
    }

    const handleCopy = () => {
        console.log("Copy button was clicked");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","Success")
    }

    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        console.log("All text cleared");
        let newText="";
        setText(newText);
        props.showAlert("Text has been cleared","Success")
    }
    const[text,setText]=useState("");
  return (
    <>
    <div className="container" mode={props.toggleMode}>
    <h1 className={`text-${props.mode=='dark'?'light':'dark'}`}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} mode={props.toggleMode} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear All text</button>
  <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy text</button>
  <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Clear extra spaces</button>
</div>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter(item=>{return item!==''}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
