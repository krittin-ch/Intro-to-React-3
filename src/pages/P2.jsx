import React from "react";
import P1 from "./P1";
import logo from "../logo.svg"

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} width="100px" alt="logo" />
            </nav>
        </header>
    );
}

function P2() {
    return (
        <div>
            <Header />
            <P1 />
        </div>
    );
}

export default P2;