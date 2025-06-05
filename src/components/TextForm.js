import React,{useState} from 'react';


const TextForm = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handeClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handeSenClick = () => {
        let arr = text.split(".");
        let c = arr.length;
        let newText = "";
        while (c!==0) {
            newText = arr[c-1].charAt(0).toUpperCase() + arr[c-1].substring(1).toLowerCase() + ". " + newText;
            c--;
        }
        setText(newText);
        props.showAlert("Converted to Sentence Case", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        console.log("Text Copied to Clipboard");
        props.showAlert("Text Copied to Clipboard", "success");
    }
    const handeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-3' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{color : props.mode === 'dark' ? 'white' : '#042743', backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handeSenClick}>Convert to Sentence Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handeClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>Word Count : {text.length > 0 ? text.split(" ").length : 0} | Character Count : {text.length} | Line Count : {text.length > 0 ? text.split("\n").length : 0} | Sentence Count : {text.length > 0 ? text.split(".").length : 0}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}

export default TextForm;
