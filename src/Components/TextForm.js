import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "Success");
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "Success");
    }
    const handleReverse = ()=>{
        let newText = text.split("").reverse().join("");
        setText(newText);
    } 

    const handleChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "sucess");

    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "sucess");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","sucess");


    }

    const [text, setText] = useState('');
    // text= "new Text"; // wrong way to change the state
    // setText("new Text") //Correct way to change the state
  return (
    <>
    <div className = "conatiner" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleChange}  style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse the text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy The Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0
        }).length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0
        }).length} Average Time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>    
    </div>
    </>
   
  )
}
