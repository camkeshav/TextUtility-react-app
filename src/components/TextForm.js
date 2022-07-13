import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpperClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }

    const handleCLearClick = () => {
        setText("");
    }

    const handleCapatalizeClick = () => {
            setText(text.split(" ")[0][0].toUpperCase() + text.substring(1));
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to clipboard");
    }
    return (
        <>
        <div className='container'>
            <div className="mb-3 p-5">
                <label htmlFor="myBox" className="form-label my-3"><h2>{props.heading}</h2></label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} placeholder="Enter text here"></textarea>
                <button className="btn btn-primary  mx-1 my-3 " onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCLearClick}>Clear All</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCapatalizeClick}>Capatalize</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCopy}>Copy to clipboard</button>
            </div>
            
        </div>
        <div className="container mx-5 my-2 center">
            <h2>Your text Summary</h2>
            <p>{text.split("").length === 0 ? text.split("").length : text.split(" ").length} words and {text.length} characters {text.split("").length === 0 ? text.split("").length : text.split("\n").length} lines</p>
            <p>{text.split("").length === 0 ? (0.08* text.split("").length) : (0.08* text.split(" ").length)} minutes to read the paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

export default TextForm