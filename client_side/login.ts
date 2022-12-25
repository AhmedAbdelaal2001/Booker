import { io } from "socket.io-client";

const login_button = document.getElementById("login-button") as HTMLButtonElement;

localStorage.clear();

// const socket = io();

// socket.emit("hi");

console.log(login_button);

login_button.onclick = async () => {
    const username = document.getElementById("username") as HTMLInputElement;
    
    const password = document.getElementById("password") as HTMLInputElement;
    
    const loginData = {
        username: username.value,
        pass: password.value
    }

    const response = await fetch("/members/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })

    const { token, error } = await response.json();

    if (error) {
        const msg = document.getElementById("error-msg") as HTMLElement;
        msg.innerText= error;
    } else {
        localStorage.setItem("token", token);
        location.href = "./home";
    }

    console.log("token: " + token)
    console.log("error: " + error)
}
