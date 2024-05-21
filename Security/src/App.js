import React from 'react';
import './App.css';
import HelloComponent from './HelloComponent';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UsersList from './components/UsersList';
//function
function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

// App Component
function App(){
  //variables
  const name = "Lee";
  const age = 23;

  const user = {
    firstName : "Lee",
    lastName : "min-Ho"
  }
return (
  <>
  {/*<h2> Welcome to React !!!  </h2>
  <h2>My Name is { name} and age is { age} </h2>
  Welcome { formatName(user) }
  <HelloComponent />
  <Clock />
  <Toggle />
  <Greeting.isLoggedIn=(false)/>
  <LoginControl />
  <NameForm />*/}
  {/* <Signup />
<Login /> */}
 <Router>
   <Routes>
       <Route path="/" element={<Login />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/signup" element={<Signup />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/users-list" element={<UsersList />}></Route>


   </Routes>
 </Router>
  {/* Routing in React */}
  </>
);
}

export default App;