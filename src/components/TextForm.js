import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpperClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCLearClick = () => {
        setText("");
    }

    const handleCapatalizeClick = () => {
            setText(text.split(" ")[0][0].toUpperCase() + text.substring(1));
            props.showAlert("Capatalized the string", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='light' ? 'grey' : 'white'}}>
            <div className="mb-3 p-5">
                <label htmlFor="myBox" className="form-label my-3"><h2>{props.heading}</h2></label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} placeholder="Enter text here" style={{backgroundColor: props.mode==='light' ? 'white' : 'grey', color: props.mode==='light' ? 'grey' : 'white'}}></textarea>
                <button className="btn btn-primary  mx-1 my-3 " onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCLearClick}>Clear All</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCapatalizeClick}>Capatalize</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleCopy}>Copy to clipboard</button>
                <button className="btn btn-primary mx-1  my-3 " onClick={handleSpaces}>Remove Spaces</button>
            </div>
            
        </div>
        <div className="container mx-5 my-2 center" style={{color: props.mode==='light' ? 'grey' : 'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split("").length === 0 ? text.split("").length : text.split(" ").length} words and {text.length} characters {text.split("").length === 0 ? text.split("").length : text.split("\n").length} lines</p>
            <p>{text.split("").length === 0 ? (0.08* text.split("").length) : (0.08* text.split(" ").length)} minutes to read the paragraph</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter in the textbox to preview it here"}</p>
        </div>
        </>
    );
}

export default TextForm