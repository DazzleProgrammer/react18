import React, {useState} from 'react'

    export default function TextForm(props) {

    const[text, setText] = useState('');

    // ================ Button Functions =================

    const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);

    let newText = text.toUpperCase();
    setText(newText);

    }

   
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleClearClick = () => {

        let newText = ("");
        setText(newText);
    }

    const handleCopy = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }



    
    const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);

    }

    return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>UPPERCASE ⥣ </button>
    <button type="button" className="btn btn-success mx-3" onClick={handleLoClick} >lowercase ⥥</button>
    <button type="button" className="btn btn-danger mx-3" onClick={handleExtraSpace}>Remove extra spaces ⛌</button>
    <button type="button" className="btn btn-info mx-3" onClick={handleCopy}>Copy ↺</button>
    <button type="button" className="btn btn-warning mx-3" onClick={handleClearClick}>Clear ☑︎</button>
    </div>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
    }





