import React from "react";
import logo from "../../assets/images/project_2/logo.png"

function Navbar() {
    return (
        <header className="header-2">
            <nav className="nav-2">
                <div className="nav-items-2">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <ul>
                        <li><a href="/airbnb">Airbnb your place</a></li>
                        <li><a href="/airbnb">Sign up</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;