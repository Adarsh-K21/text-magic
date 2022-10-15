import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
    if (mode === "dark") {
      setMode("light");
      document.querySelector('.form-check-label').textContent = "Enable Dark Mode";
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1C2833  ";
      document.querySelector('.form-check-label').textContent = "Disable Dark Mode";
      showAlert("DarkMode Enabled", "success");
      // document.title=('TextUtils - DarkMode');
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextMagic" mode={mode} toggleMode={toggleMode} />
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
      </Router>
    </>
  );
}

export default App;
