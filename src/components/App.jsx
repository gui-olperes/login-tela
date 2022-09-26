import React from "react";
import Form from "./Form";

import minhaImagem from '../components/img/purple-wave.png'



let userIsRegistered = false;

function App() {
  return (
    
    <div className="container">
      <img src={minhaImagem} className="wave"/>
        <div className="box">
        <Form  userIsRegistered={userIsRegistered}/>
        </div>    
      
    </div>  
  );
}

export default App;

