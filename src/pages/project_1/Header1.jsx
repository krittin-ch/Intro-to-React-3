import React from "react";

// logo
import logo from "../../logo.svg"

function Header1() {
    return (
        <header className="header-1">
            <nav className="nav-1">
            <div className="logo-1">
                <img src={logo} className="nav-logo-1" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    );
}

export default Header1;