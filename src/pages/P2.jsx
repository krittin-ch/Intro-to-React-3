import React from "react";
import P1 from "./P1";
import logo from "../logo.svg"

// using <ul className=""> becuase this is javascript. It comes from
// const ul = document.createElement("ul")
// ul.className = ""

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} width="100px" alt="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <P1 />
    );
}

function Footer() {
    return (
        <footer>
            <small>@ 2024 Krittin Development. All rights reserved.</small>
        </footer>
    );
}

function P2() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default P2;