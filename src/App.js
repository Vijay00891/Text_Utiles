import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type) => {
     setAlert({
      msg: message,
      type: type 
     })
     setTimeout(() => {
        setAlert(null);
     }, 1500);
   }
   const toggleMode =()=>{
     if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'gray';
        document.title= 'TextUtils - Dark Mode';
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title= 'TextUtils - Light Mode';
     }
   }
  return (
    <>
{/* <BrowserRouter> */}
<Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Routes> */}
    {/* <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/" element={}></Route> */}
    <TextForm mode={mode} showAlert={showAlert} />
  {/* </Routes> */}
</div>
{/* </BrowserRouter> */}
    </>
  );
}

export default App;
