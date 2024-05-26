import React from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UsersList from './components/UsersList';

//function
// App Component
function App(){
  
return (
  <>
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