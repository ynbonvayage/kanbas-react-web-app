import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="list-group">
            <Link to="/project/" className="list-group-item">
                Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
                Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
                Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
                Account
            </Link>
            <Link to="/project/search" className="list-group-item">
                Search
            </Link>
        </div>
    );
}

export default Navigation;