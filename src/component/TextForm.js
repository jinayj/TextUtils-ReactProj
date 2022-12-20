import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = (event)=>{
        event.preventDefault()
        //console.log("handle up click")
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert('Text converted to upper case', 'success')
    }

    const handleLoClick = (event)=>{
        event.preventDefault()
        //console.log("handle up click")
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert('Text converted to lower case', 'success')

    }

    const handleCapitalizeClick = (event)=>{
        event.preventDefault()
        //console.log("handle up click")
        const words = text.split(" ");

        for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        let newText = words.join(" ")
        setText(newText)
        
        props.showalert('Text capitalized', 'success')

    }

    const handleChange=(event)=>{
        //console.log("handle change")
        setText(event.target.value)
    }

    const handleClearClick=(event)=>{
        event.preventDefault()
        setText('')
        props.showalert('Text cleared', 'success')

    }

    const[text,setText] = useState('')
  return (
    <>
    <div>
    <form>
        <h1>Enter your text here</h1>
  <div className="mb-3">
    
    <textarea style={ { backgroundColor: props.mode=='light' ? 'white' : '#463C3C', color:props.mode=='light' ? 'black' : 'white'}  }  id="container" cols="140" rows="10" value ={text} onChange={handleChange}></textarea>
  </div>
  <button disabled={text.lenght==0} className="btn btn-primary mx-1" onClick={handleUpClick}>to Uppercase</button>
  <button disabled={text.lenght==0} className="btn btn-primary mx-1" onClick={handleLoClick}>to Lowercase</button>
  <button disabled={text.lenght==0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
  <button disabled={text.lenght==0} className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>to Capitalize</button>

</form> 
</div>
<div className='preview my-2'>
    <h3>Your Text Summary</h3>
    <p> {text.split(" ").filter((ele)=>{return ele.length!=0}).length} words and {text.length} characters </p>
    <p>{0.008*text.split(/\s+/).length} minutes to read</p>
    <br></br>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
  )
}
