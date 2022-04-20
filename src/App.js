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
  const handelSubmit=event=>{
    event.preventDefault();
const name=event.target.name.value;
const email=event.target.email.value;
const user={email,name};

// post 

fetch('http://localhost:5000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})

  }
  return (
    <div className="App">
     <h1>user{users.length}</h1>
     <form onSubmit={handelSubmit}>
       <input type="name" name='name' required placeholder='name' />
       <input type="email" name='email' required placeholder='email' />
     <input type="submit" value="add user"/>
     </form>
     <ul>
       {
         users.map(user => <li style={{listStyle:'none'}}> {user.name} { user.email}</li>)
       }
     </ul>
    </div>
  );
}

export default App;
