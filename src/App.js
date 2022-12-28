import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList';


function App() {
  const[users,setUsers]=useState([]);

  const addUserHandler=(uName,uAge)=>{
      setUsers((prevUsers)=>{
        return [...prevUsers,{name:uName,age:uAge,id:Math.random().toString()}]
      })
  }
  return (
    <div>
      <AddUser onAdd={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
