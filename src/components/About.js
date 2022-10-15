import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState( {

    //     color:'black',
    //     backgroundColor:'white'
    //  })

     let myStyle ={

        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#34495E':'white',
     }

     document.title=('TextMagic - About');
    

    return (
                <div className= "container" style={myStyle}>
                    <h1 className="my-3">About Us</h1>
                    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>What is text formatting?</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Formatted text is text that is displayed in a special, specified style. In computer applications, formatting data may be associated with text data to create formatted text. How formatted text is created and displayed is dependent on the operating system and application software used on the computer.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Purpose</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"  style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            The purpose of formatted text is to enhance the presentation of information. For example, in the previous paragraph, the italicized words are each followed by examples. At a glance, the reader can ascertain that there are four special words in the paragraph. The goal is to help the reader to obtain, understand, and retain the information.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Copying formatted text</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            When you copy formatted text to your clipboard, formatting information may or may not be copied with the text data.

For example, if you select text in one application that is boldface, you can copy it to your clipboard by pressing Ctrl+C. The formatting data is also copied to the clipboard, saying "this text is bold." When you paste it (Ctrl+V) into a program that also supports formatted text, that formatting data is included, and the pasted text should appear bold.

However, if you paste the text into an application that does not support bold text, such as Microsoft Notepad, the pasted text is unformatted. Notepad ignores the formatting information, because it doesn't understand it. However, the plain text is pasted correctly.

The same is true if you paste the formatted text into a text field, such as the address bar in your web browser. Formatting data is stripped, but the plain text is pasted.
            </div>
            </div>
        </div>
        </div>
                
        
                    
                </div>
    )
}
