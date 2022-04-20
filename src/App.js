import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser]=useState([])
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div className="App">
     <h1>{user.length}</h1>
    </div>
  );
}

export default App;
