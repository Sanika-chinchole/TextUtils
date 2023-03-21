import React,{useState} from "react"



export default function TextForm(props) {
    

    const handelUpClick= () => {
        
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handelOnChange= (event) => {
      
        setText(event.target.value);
       
    }
    const handelLoClick= () => {
       
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handelClearClick= () => {
       
        let newText= '';
        setText(newText)
        props.showAlert("text cleared","success")
    }

    const handleCopy= () => {
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

     const [text,setText]=useState('');
    

    return(
        <>
        <div className="container"   style={{color:props.mode==='dark'?'white':'#042743'}}>
            
            <h1 className="mb-2">{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
           </div>

           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handelUpClick}>Convert to Uppercase</button>
           <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handelLoClick }>Convert to Lowercase</button>
           <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handelClearClick }>Clear Text</button>
           <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy }>Copy Text</button>
           <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces }>Remove Extra Spaces</button>
           
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'? 'white': 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:" Nothing to preview"}</p>

        </div>

                                               
    

        </>
    )
}