import logo from "../logo.svg";
import React from "react";


function Logo (prop) {
    return (
        <img id={prop} src={logo} className="App-logo" alt="logo"/>
    )
}

export default Logo;