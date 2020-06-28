import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="card">
            <div className="about">
                <img className="photo" src="pfp3.jpg" alt="frog" />
                <div className="name">Vanessa K.</div>
                <div className="title">QA Tester</div>
                <span className="line"></span>
                <div className="bio">
                I am a QA Tester and an aspiring Front-End Developer with a background in HTML, CSS, and JavaScript. As someone passionate about UI/UX, I am seeking to develop my skills in that area.
                </div>
            </div>
        <nav>
            <Link to="/">
                <button className="current">home</button>
            </Link>
            <Link to="/projects">
                <button>projects</button>
            </Link>
            <Link to="/resume">
                <button>resume</button>
            </Link>
            <Link to="/contact">
                <button>contact</button>
            </Link>
        </nav>
    </div>

    // Nvm I want to divide it into header + nav and the only part that changes is middle
    );
}

export default HomePage;