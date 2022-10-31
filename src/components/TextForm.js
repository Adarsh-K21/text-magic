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

  const handleTitleClick = () => {

    var newText = text.toLowerCase().split(' ');
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Changed to Titlecase", "success");
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

  const handleReverse = () => {

    setText(text.split("").reverse().join(""));
    props.showAlert("Reversed", "success");

  }

  const handleOnChange = (event) => {

    setText(event.target.value);
  }
  const searchChange = (event) => {
    const temp = event.target.value;
    setSearch(temp.trim());
  }
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "textMagic.txt";
    document.body.appendChild(element);
    element.click();
  };
  const renderRes = (search) => {
    const check = search.trim();
    if (check.length !== 0) {
      const filterSearch = text.split(" ");
      const res = filterSearch.filter((x) => { return x === search })

      return (<p>"{search}" Occurrences: {res.length}</p>)
    }

  }

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");


  const handleClear = () => {
    setText("");
  }

  // Declare a new state variable, which we'll call "text"
  // const [text, setText] = useState("");


  //  text ='new text';   wrong way to change the state

  //  setText('new text');   //right way to change the state



  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea placeholder='Enter the text to modify' className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#34495E' : 'white', border: props.mode === 'dark' ? "none" : "1px solid", color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} rows="10"></textarea>
        </div>


        <div className="mb-3">
          <h1>Results</h1>
          <textarea placeholder='Results will be displayed here' className="form-control" id="myBox" value={text} disabled style={{ backgroundColor: props.mode === 'dark' ? '#34495E' : 'white', border: props.mode === 'dark' ? "none" : "1px solid", color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} rows="10"></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}  >Convert to <b>UPPERCASE</b></button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to <b>lowercase</b></button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Convert to <b>Title Case</b></button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverse}>Reverse</button>


        {/* spl buttons */}
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" disabled={text.length === 0} className="btn btn-success" onClick={handleCopy}><i class="fa-solid fa-copy"></i></button>
          <button type="button" disabled={text.length === 0} className='btn btn-danger' onClick={handleClear}><i class="fa-solid fa-trash"></i></button>
          <button type="button" disabled={text.length === 0} className='btn btn-info' onClick={handleDownload}><i class="fa-solid fa-download"></i></button>
        </div>

      </div>


      <input class="rounded mx-2 p-2 px-3" type="search" placeholder="Search the Occurrences" aria-label="Search" style={{ height: "38px" }} onChange={searchChange} />

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
        <p>{0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        {renderRes(search)}

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Write something in above text box to preview'}</p>
      </div>

    </>
  )


}