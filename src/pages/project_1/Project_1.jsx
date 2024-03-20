import React from "react";

// pages
import Header1 from './Header1';
import MainContent1 from "./MainContent1";

// using <ul className=""> becuase this is javascript. It comes from
// const ul = document.createElement("ul")
// ul.className = ""


function Project_1() {
    return (
        <div className="container-1">
            <Header1 />
            <MainContent1 />
        </div>
    );
}

export default Project_1;