
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container "></div>
        <Routes>
          <Route path="/about" element={<About />} />

          < Route exact path="/"
            element={<TextForm heading="Enter the text to analyse: " mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
