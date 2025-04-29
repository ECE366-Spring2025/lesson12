import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import useUser from "./hooks/useUser";

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {user
                ? <button onClick={() => {
                    signOut(getAuth());
                }}>Log Out</button>
                : <button onClick={() => {
                    navigate('/login')
                }}>Log In</button>
            }
        </nav>
    );
};

export default NavBar;