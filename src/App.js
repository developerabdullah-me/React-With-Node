import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUser]=useState([])
  useEffect(() =>{
    fetch(`http://localhost:5000/users`)
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div className="App">
     <h1>user{users.length}</h1>
     <ul>
       {
         users.map(user => <li style={{listStyle:'none'}}> {user.name} { user.email}</li>)
       }
     </ul>
    </div>
  );
}

export default App;
