import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {

  const [mode,setMode] = useState('dark')
  const [alert,setalert] = useState(null)

  const showalert=(message, type)=>
  {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)

    
  }

  const toggleMode=()=>{
    if(mode == 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#231745'
      document.body.style.color = 'white'
      showalert('dark mode has beem enabled', 'success')
      
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showalert('Light mode has beem enabled', 'success')

    }
  }

  return (
    <>
      <Router>
      
        <Navbar title='Textutils' about=' About Textutils' mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className='container '>
        <Routes>
        
        <Route path="/about" element={<AboutPage mode={mode}/>} ></Route>
          
        <Route path="/" element={<TextForm  mode = {mode} showalert = {showalert}/>} ></Route>
          
        
        </Routes>
        </div>
      </Router>



      
      
          
        
          
            
      
      
      </> 
  );
}

export default App;
