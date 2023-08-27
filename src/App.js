import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('dark')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#414347';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <TextForm heading = "Enter the text here to analyse below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
