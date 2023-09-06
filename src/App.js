import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

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
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#04143d";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark Mode has been enabled!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode";
      showAlert("Dark Mode has been disabled!!", "success");
    }
  };
  return (
    <HashRouter>
      <React.Fragment>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <React.Fragment>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter the text here to analyse below"
                    mode={mode}
                    showAlert={showAlert}
                  />
                }
              />
            </Routes>
          </React.Fragment>
        </div>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
