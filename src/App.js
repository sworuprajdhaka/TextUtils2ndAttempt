import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  } 

  const toggleMode = () => {
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","Success")
      document.title="TextUtils -Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","Success")
      document.title="TextUtils- Light Mode"
    } 
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse"/>}/>
      </Routes>
      </div>
      </Router>
      {/* <About/> */}

    </>
  );
}

export default App;
