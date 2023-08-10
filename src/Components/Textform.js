import React, {useState} from "react"
export default function Textform(){
    const [text,setText] = useState()
    const handleupclick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }
     const handleclearclick = () =>{
        let newtext = '';
        setText(newtext)
    }
    const handleonchane = (event) =>{
        setText(event.target.value)
    }
    return(
        <>
        <div className="container">
         <div classname="form-group" style={{display:"grid"}}>
    <label for="exampleFormControlTextarea1"  style={{marginTop:"2%"}}><h2>Textarea</h2></label>
    <textarea classname="form-control" id="exampleFormControlTextarea1 " value={text} rows="8" onChange={handleonchane}></textarea>
  </div>
  <button className="btn btn-primary mt-2 mx-3" onClick={handleupclick}>Uppercase</button>
  <button className="btn btn-primary mt-2 mx-3" onClick={handleclearclick}>Clear</button>
        </div>
      
        </>
    )
}