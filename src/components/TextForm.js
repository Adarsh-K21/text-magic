import React, { useState } from 'react'



export default function TextForm(props) {

  document.title = ('TextMagic - Home');

  const handleUpClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Changed to Uppercase", "success");
  }
  const handleLowClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lowercase", "success");
  }
  const handleClearClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  }

  const handleOnChange = (event) => {

    setText(event.target.value);
  }

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");

  //  text ='new text';   wrong way to change the state

  //  setText('new text');   //right way to change the state



  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="exampleFormControlTextarea1" className="form-label">Enter the text here</label> */}
          <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#34495E' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  >Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>


      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
        <p>{0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Write something in above text box to preview'}</p>
      </div>

    </>
  )
} import React, { useState } from 'react'



export default function TextForm(props) {

  document.title = ('TextMagic - Home');

  const handleUpClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Changed to Uppercase", "success");
  }
  const handleLowClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lowercase", "success");
  }
  const handleClearClick = () => {

    // console.log('Uppercase clicked'+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }


  const handleOnChange = (event) => {

    setText(event.target.value);
  }

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");

  //  text ='new text';   wrong way to change the state

  //  setText('new text');   //right way to change the state



  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="exampleFormControlTextarea1" className="form-label">Enter the text here</label> */}
          <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#34495E' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  >Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>


      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
        <p>{0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Write something in above text box to preview'}</p>
      </div>

    </>
  )
}