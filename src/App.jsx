import {useState} from 'react'
import './App.css'
//import './spa'
//import {menuItemClicked} from "./spa";
import 'bootstrap'
import './components/login'

function App() {
    const [userName, setUsername] = useState("");
    const [userRole, setUserRole] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const loginFunction = async (user) => {
        const result = await fetch(loginUrl, {
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
        }
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

                {!loggedIn && <LogIn onAdd={logInFunc} />}

                //{loggedIn && <LogOut onClick={logOutFunc} />}
            <Footer />
        </div>
    );
};

export default App
