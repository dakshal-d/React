import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div className='flex justify-center my-4'>
        <div className="" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className=''>{props.heading}</h1>
            <div className="flex justify-center my-4"> 
            <textarea className="bg-slate-300 rounded-lg" value={text} onChange={handleOnChange} style={{ width: "400px" }} rows="8"></textarea>
            </div>
            <div className=''>
            <button className="mx-4 bg-slate-500 rounded-lg text-white px-4" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="mx-4 bg-slate-500 rounded-lg text-white px-4" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="mx-4 bg-slate-500 rounded-lg text-white px-4" onClick={handleClearClick}>Clear Text</button>
            <button className="mx-4 bg-slate-500 rounded-lg text-white px-4" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='flex justify-center my-4'>Your text summary:</div>
            <div className='flex justify-center'>
                {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </div>
            <div className='flex justify-center'>
                {text.split(" ").length} words and {text.length} characters
            </div>
        </div>
        </div>
    )
}