import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [id, setId] =useState('')
  const [password,setPassword] = useState('')
  return (
    <>
    
    <div className="App ">
      <label>username</label>
      <input 
      type="text"
      value={id}
      onChange={(e) => setId(e.target.value)}

      ></input>
      <label>password</label>
      
      <input 
      type="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      ></input>
      <button> login</button>
      
    </div>
    </>
  );
}

export default App;
