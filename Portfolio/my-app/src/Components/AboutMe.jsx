import React from "react";
import "./AboutMe.css"; // Import the new CSS file

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      {/* Profile Image Section */}
      <div className="aboutMe-profile">
        <img src="./src/assets/pic.png" alt="Profile" />
      </div>

      {/* About Content */}
      <div className="aboutMe-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm Ayush Nikalje, an AI & Data Science student at DMCE, Airoli.
          Passionate about web development and AI, I love creating projects
          that blend innovation with technology.
        </p>
      </div>

      {/* Work Experience */}
      <div className="aboutMe-work">
        <h2>Work Experience</h2>
        <p>
          Currently working on projects related to web development and AI. My
          recent project includes a portfolio and an audiobook website.
        </p>
      </div>

      {/* Skills Section */}
      <div className="aboutMe-skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Data Structures & Algorithms</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="aboutMe-projects">
        <h2>Projects</h2>
        <ul>
          <li>AUDIFY - Audiobook Website</li>
          <li>Portfolio Website</li>
          <li>Moives searching?recommendation Project using search optimisation</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
