import React, { useEffect , useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    return (
 
<>
    <h1>products</h1>
    <li> <Link id="link" to="/home">Home</Link> </li>  
    <table id="users">
       
       <tr>
           <th>ID</th>
           <th>Email</th>
           <th>Password</th>
           <th>UPDATE</th>
           <th>Delete</th>
       </tr>
       </table> 
</>
    );
}

export default Products;