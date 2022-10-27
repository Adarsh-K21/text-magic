import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sunpng from './images/sun.png';
import moonpng from './images/moon.png';
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [text,setText]=useState("Enable DarkMode");

 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.querySelector('#darkModeBtn').src = sunpng;
      document.body.style.backgroundColor = "#1C2833";
    } else {
      
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.querySelector('#darkModeBtn').src = moonpng;
      // document.querySelector('.form-check-label').textContent = "Disable Dark Mode";
      // document.title=('TextUtils - DarkMode');
    }
  };

  

  return (
    <>
      <Router>
        <Navbar title="TextMagic" mode={mode} text={text} toggleMode={toggleMode} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <p className="container">
              Best tool on Internet for manipulating your text, You an convert your text in any form i.e. Upper Case, Lower Case, Reverse and Many more with just a click.
              </p>

              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            </Route>
          </Switch>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
