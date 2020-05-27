import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="card">
            <div className="about">
                <img className="photo" src="pfp3.jpg" alt="frog" />
                <div className="name">Vanessa K.</div>
                <div className="title">Title Text Blahblah</div>
                <span className="line"></span>
                <div className="bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum finibus euismod. Nam sollicitudin dui lectus, eget accumsan nibh auctor sed. Suspendisse eget molestie odio.
                </div>
            </div>
        <nav>
            <Link to="/">
                <button className="current">about</button>
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