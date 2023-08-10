import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


function App() {
  return (
    <>
    <Router>
   
    <Navbar title="anuj"/>
    <Alert Alert="alert!"/>


     <Routes>
     <Route exact path="/" element={<Home/>}/>
          
         
          <Route exact path="/about" element={<About/>}/>
          
          
       
         
        </Routes>
        </Router>
        {/* <Textform/> */}
    </>
  );
}

export default App;


