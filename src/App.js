import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
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

  const toggleMode = (displayMode) => {
    if (displayMode === "light") {
      setMode("light");

      document.body.style.backgroundColor = "white";
      setText("Disable LightMode");
      showAlert("LightMode Enabled", "success");
    } else {
      setMode("dark");
      setText("Disable DarkMode");
      document.body.style.backgroundColor = "#1C2833  ";
      document.querySelector('.form-check-label').textContent = "Disable Dark Mode";
      showAlert("DarkMode Enabled", "success");
      // document.title=('TextUtils - DarkMode');
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextMagic" mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
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
