import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("You have Clicked On HandleUpClick");
        let  newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase")
        
    }
   

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
        

    }
    const handleClear = () => {
      console.log("Text Cleared");
      setText("");
      props.showAlert("Text Cleared")
    }
    
    const handleDown=()=>{
      console.log("You have Clicked On HandleDownClick");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase")
    }
    const handleCopy =()=>{
      console.log("I am copy");
      var copyText = document.getElementById("myInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied to Clipboard")
    }
    
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container-1"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
        
          
         <div className="mb-3" >
<textarea id="myInput" className="form-control"  placeholder='Enter your text here' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode === 'dark' ? 'white' : 'black', // Text color

    // Placeholder color
    '::placeholder': {
      color: props.mode === 'dark' ? 'white' : 'darkgray'
    }}} rows="10">
                      
                    </textarea>
        </div>
        
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleDown}>Convert To Lowercase</button>
                    <button className="btn btn-primary"  onClick={handleClear}>Clear Screen</button>
                    <button  className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            
    </div>
    <div className="container-2 my-5" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>Your Text Summary</h1>
         <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
         <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} Minutes To Read</p>


         <h1>Preview</h1>
         <p>{text.length>0?text:"Enter your text above to preview"}</p>
    </div>
    </>
  )
}
