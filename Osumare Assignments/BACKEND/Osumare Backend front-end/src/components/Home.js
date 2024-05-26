import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";

function Home() {
    return (
        <>
            <ul>
                <li>Home</li>
                <li><Link to="/users-list">Users List</Link></li>
                <li>Products</li>
                <li>Orders</li>
                <li>About Us</li>
                <li>Contact</li>
                <li><Link id="logout" to="/">Logout</Link></li>
            </ul>
            <div>
            </div>
        </>
    );
}
export default Home;
