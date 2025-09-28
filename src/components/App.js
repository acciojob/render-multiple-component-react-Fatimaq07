import React from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "Epicure Express",
      description: "A food delivery app for exploring restaurants and ordering meals."
    },
    {
      name: "Donation Website",
      description: "A platform where users can donate securely using Stripe payment gateway."
    }
  ];

  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
