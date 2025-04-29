import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from 'firebase/auth';
import NavBar from "./NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <h1>RPS</h1>
            {/* <img
                height={200}
                src="/rps.png"
                alt="Rock Paper Scissors"
            /> */}
        </div>
    );
}

export function About() {
    const [data, setData] = useState(null);
    const { user, isLoading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const token = user && await user.getIdToken();
                console.log(token);
                const headers = token ? { Authorization: `Bearer ${token}` } : {};
                //const response = await axios.get(`/api/player/1`, { headers });
                const response = await axios.get(`http://moosetracks.eastus.azurecontainer.io:8080/api/player/1`, { headers });
                setData(response.data);
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        };
        if (!isLoading) {
            loadUsers();
        }
    }, [isLoading, user]);

    if (data)
        return (
            <>
                <NavBar />
                <h1>About Us</h1>
                <p>Welcome to rock paper scissors!</p>
                {user
                    ? <pre>{JSON.stringify(data, null, 2)}</pre>
                    : <p>Log in to view sensitive info!</p>
                }
            </>
        );
    return (
        <div>
            <NavBar />
            <h1>About Us</h1>
            <p>Welcome to rock paper scissors!</p>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <NavBar />
            <h1>Contact Us</h1>
            <p>Find us on instagram</p>
        </div>
    );
}

export function App() {
    return <Home />;
}