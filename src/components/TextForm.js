import React, {useState} from 'react'

export const TextForm = (props) => {
    const handleUpClick = () =>{
        // console.log("Upcase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        // console.log("Upcase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () =>{
        // console.log("Upcase was clicked" + text);
        let newText = ('');
        setText(newText)
    }
    const handleCapital = () =>{
    
        const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
        setText(capitalized);

        // console.log(capitalized)
    }
    const handleSpace = () =>{
        let space = text.replaceAll("  ", "");
        // console.log(space);
        setText(space);
    }

    const handleOnChange= (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >

        <h1>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={handleCapital}>Capital First Letter</button>
          <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Blank Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words,{text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
