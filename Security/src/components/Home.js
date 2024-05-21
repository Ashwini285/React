import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
        <>
            <ul>
                <li>Home</li>
                <li><Link to="/users-list">Users List</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><Link id="logout" to="/">Logout</Link></li>
            </ul>
            <div>
            </div>
        </>
    );
}

export default Home;
