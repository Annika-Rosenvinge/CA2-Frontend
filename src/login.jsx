import {useState} from "react";

const logIn = ({onAdd}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter username");
            return;
        }
        if (!password) {
            alert("Please enter password");
            return;
        }
    }
}