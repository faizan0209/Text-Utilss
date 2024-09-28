import React, { useState } from 'react';
import './Form.css';  

function Form(props) {
  const [text, setText] = useState("Type your text...");

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const HandleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const HandleOnClickL = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const Clear = () => {
    setText('');
  };

  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <h1 className="display-3 text-center text-primary fs-1 fw-bolder">{props.text}</h1>
          <textarea
            className="form-control border border-primary shadow-sm"
            value={text}
            onChange={HandleOnChange}
            id="utils"
            rows="10"
          ></textarea>
        </div>
        <div className="button-group text-center">
          <button
            type="button"
            onClick={HandleOnClick}
            className="btn btn-outline-primary mx-2 my-2"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            onClick={HandleOnClickL}
            className="btn btn-outline-secondary mx-2 my-2"
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            onClick={Clear}
            className="btn btn-outline-danger mx-2 my-2"
          >
            Clear
          </button>
        </div>
        <div className="text-summary mt-5 p-3 bg-light border rounded shadow-sm">
          <h2 className="text-success">Text Summary</h2>
          <p className="lead">
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words and {text.length} Characters
          </p>
        </div>
        <div className="preview-section mt-4 p-3 bg-white border rounded shadow-sm">
          <h3 className="text-info">Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
        </div>
      </div>
    </>
  );
}

export default Form;
