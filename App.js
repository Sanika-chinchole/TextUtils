import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

/*import {
  
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";*/



function App() {
  
  const [Mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
         setAlert(null);
       },1500)
  }
  
  

  const toggleMode=()=>{
    
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  
  return (
   <>
  
{/*<Navbar title="TextUtils" aboutText="About Us"/>*/}
{/*<Router  >*/}
<Navbar title= "TextUtils" mode={Mode}  toggleMode={toggleMode}/>
  <Alert alert={alert}/>*/
   <div className='container my-3'> 
   { /*<Routes>
        <Route exact path="/about"
            element={ <About />}/>
      
      
  <Route exact path="/"*/}
        <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Remove extra spaces"  mode={Mode}/>
          
            
       
  
  {/*</Routes>*/}
  </div>
{/*</Router>*/}
   
  </>
  
  );
}

export default App;
