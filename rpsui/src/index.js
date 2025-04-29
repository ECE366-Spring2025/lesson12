import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact } from "./App";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
    </BrowserRouter>,
  </React.StrictMode>
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY2Xz_4lZkHoOPIQuKjpbS--IhYGG-3qs",
  authDomain: "rps312.firebaseapp.com",
  projectId: "rps312",
  storageBucket: "rps312.firebasestorage.app",
  messagingSenderId: "371582951442",
  appId: "1:371582951442:web:25f3155cccb900d829b8cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
