import React, {useState} from 'react'

export default function TextForm(props) {
   const handleupClick=()=>{
    let newText =text.toUpperCase();
    setText(newText);
   }

   const handleloClick=()=>{
    let newText =text.toLowerCase();
    setText(newText);
   } 

   const handleClearClick=()=>{
    let newText ='';
    setText(newText);
   } 

   const handleOnChange = (event)=>{
    setText(event.target.value);
   }

   const [text, setText] = useState("Enter Text here");

  return (
<>
   <div className='container' >
    <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupClick} >Change in uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick} >Change in lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear case</button>
        
  </div>

       <div className="container">
        <h1>Text count</h1>
        <p>{text.split(" ").length} Words {text.length} Carecters</p>
        <p>{0.008 * text.split("").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
        
       </>
  )
}
