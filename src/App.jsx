import {useState} from 'react'
import './App.css'
import 'bootstrap'
import './components/login'
import './components/logout'
import {Outlet, Link} from "react-router-dom"
import './components/settings'
import {loginURL} from "./components/settings";
import Footer from "./components/Footer";

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

    return (
        <div className="App">
            <header className="app-header"/>
                {loggedIn && <WelcomePage name={userName} role={userRole} />}

                {loggedIn && (
                    <nav className="borderNoTop">
                        <Link to="/">Home</Link>
                        <Link to="/pageone">Page 1</Link>
                        <Link to="/pagetwo">Page 2</Link>
                    </nav>
                )}
                <Outlet />

                {!loggedIn && <login onAdd={loginFunction()} />}

                //{loggedIn && <logout onClick={logOutFunction()} />}
            <Footer/>
        </div>
    );
};

export default App
