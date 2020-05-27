import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="card">
            <div className="about">
            <img className="photo" src="pfp3.jpg" alt="frog" />
            <div className="name">Vanessa K.</div>
            <div className="title">Title Text Blahblah</div>
            <span className="line"></span>


            <div className="contact-info">
                <p>vanessakratohvil@gmail.com</p>
                <p>(123) 456-789</p>
                <div className="social-links">
                    <a href="https://github.com/piupi"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/vanessakratohvil/"><i class="fab fa-linkedin-in fa-2x"></i></a>
                </div>
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
    )
};

export default Contact;