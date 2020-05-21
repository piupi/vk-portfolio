import React from 'react';
import './App.css';

function App() {
  return (
    <div className="card">
      <div className="about">
      <img className="photo" src="pfp3.jpg" alt="frog" />
        <div className="name">Vanessa K.</div>
        <div className="title">Friend of cats</div>
        <span className="line"></span>
        <div className="bio">
          Blah blah blah blah bacon ipsum dolor amet shank ground round ham hock buffalo ribeye. Ham hock short ribs andouille flank tri-tip beef, porchetta pancetta filet mignon corned beef pork belly.
        </div>
      </div>
      <nav>
        <button className="current">about</button>
        <button>projects</button>
        <button>resume</button>
        <button>contact</button>
      </nav>
    </div>
  );
}

// Nvm I want to divide it into header + nav and the only part that changes is middle

export default App;
