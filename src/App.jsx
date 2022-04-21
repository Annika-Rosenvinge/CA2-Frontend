import {useState} from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import 'bootstrap'
import './components/Logout'
import Footer from "./components/Footer";
import './components/Login'
import {loginURL, adminInfo, basicLogin} from "./components/Settings";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";

function App() {
    const [userName, setUsername] = useState("");
    const [userRole, setUserRole] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const loginFunction = async (user) => {
        const result = await fetch(loginURL, {
            method: "POST",
            headers:{
                "Content.type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await result.json();
        setUsername(data.username);
        setUserRole(data.role);
        if (data.username != null && data.username != ""){
            setLoggedIn(true);
            setUsername("");
            setUserRole("");
        }
    };

    const logOutFunction = async () => {
        setLoggedIn(false);
    }

    const logoutFunction = async() =>{
        setLoggedIn(false);
        setUsername("");
        setUserRole("");
    }

    return (
        <div className="App">
            <Header/>
                {loggedIn && <WelcomePage name={userName} role={userRole} />}

                {loggedIn && (
                    <nav className="borderNoTop">
                        <Link to="/">Home</Link>
                        <Link to="/pageone">Page 1</Link>
                        <Link to="/pagetwo">Page 2</Link>
                    </nav>
                )}
                <Outlet />

                {!loggedIn && <logIn onAdd={loginFunction} />}

                {loggedIn && <logOut onClick={logoutFunction} />}
            <Footer />
        </div>
    );
};

export default App
