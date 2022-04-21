import {useState} from 'react'
import './App.css'
//import './spa'
//import {menuItemClicked} from "./spa";
import 'bootstrap'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="app-header">
            <div className="form-group">

            <form>
                <h1>Login Page</h1>
                <label htmlFor="usr">Username </label>
                <input type="text"/>
                <br/>
                <label htmlFor="pwd">Password </label>
                <input type="text"/>
                <br/>
                <br/>
                <button type="submit" className="btn btn-default">Login</button>
                <button type="button">Register</button>
            </form>
            </div>
            </header>

        </div>
    )
}

export default App
