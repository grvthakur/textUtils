import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleItClick=()=>{
        
        let newText="";
        setText(newText)
    }

    
    
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    const[text,setText]=useState(" ");
  
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}> 
     <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <div>
             <button className="btn btn-primary mx-5" onClick={handleUpClick}>Convert to upper Case</button>
             <button className="btn btn-primary" onClick={handleLoClick}>Convert to lower Case</button>
             <button className="btn btn-primary mx-5" onClick={handleItClick}>ClearText</button>
         </div>
         <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
             <h2>Your text summary</h2>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter text to preview"}</p>
         </div>
    </div>
    </>
  )
};


