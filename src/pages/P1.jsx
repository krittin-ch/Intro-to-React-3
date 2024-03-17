import React from "react";

// pages
import Header from './Header';
import Footer from './Footer';
import MainContent from "./MainContent";

// using <ul className=""> becuase this is javascript. It comes from
// const ul = document.createElement("ul")
// ul.className = ""


function P1() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default P1;