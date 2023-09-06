import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clickUpHandler = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase!!!', 'success')
  };
  
  const clickLowHandler = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase!!!', 'success')
  };
  
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control ${props.mode}Mode`}
            id="textBox"
            rows="8"
            value={text}
            placeholder="Enter text here"
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={clickUpHandler}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clickLowHandler}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
