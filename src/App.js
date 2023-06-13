
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';


import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1800)
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; 
      showAlert("Dark mode enabled", "success");
      // document.title = 'TextUtlis -Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
      // document.title = 'TextUtlis -Light mode';
    }
  }
  return (
    // <>
    // <nav>
    //   <li>Home</li> 
    //   <li>Contact</li>
    //   <li>About</li>
    // </nav>
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, neque laborum velit, similique odit quasi impedit ullam adipisci facere nostrum nam possimus exercitationem esse veniam iste praesentium ex voluptates! Vitae?</p>
    // </div>
    // </>
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <BrowserRouter>
      
    <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
             
            
          </Route>
        </Routes>
        </BrowserRouter> */}
        
        
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Modify" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
      
  );
}

export default App;
