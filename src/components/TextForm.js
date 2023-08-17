import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const clickUpHandler = () => {
    setText(text.toUpperCase());
  }

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }
  return (
    <>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" id="textBox" rows="8" value={text} onChange={onChangeHandler}></textarea>
      </div>
      <button className="btn btn-primary" onClick={clickUpHandler}>Convert to Uppercase</button>
    </>
  );
}
