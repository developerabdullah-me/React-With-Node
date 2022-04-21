import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers]=useState([])
  useEffect(() =>{
    fetch(`http://localhost:5000/users`)
    .then(res =>res.json())
    .then(data => setUsers(data))
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
.then(res => res.json())
.then(data => {
  const newUser=[...users,data]
  setUsers(newUser); 
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
          users.map(user => <li key={user.id} style={{listStyle:'none'}}> id: {user.id} name: {user.name} email: {user.email} </li>)
        }
       
     </ul>
    </div>
  );
}

export default App;
