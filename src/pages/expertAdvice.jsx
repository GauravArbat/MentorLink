import React from "react";
import "./expertAdvice.css"; // Optional: Add styles for the cards

const experts = [
  {
    name: "John Doe",
    expertise: "Software Engineering",
    description: "Expert in full-stack development and cloud computing.",
    link: "https://meet.google.com/oot-uoct-mqc",
  },
  {
    name: "Jane Smith",
    expertise: "Data Science",
    description: "Specialist in machine learning and data visualization.",
    link: "https://meet.google.com/oot-uoct-mqc",
  },
  // Add more experts as needed
];

const ExpertAdvice = () => {
  return (
    <div className="expert-advice-container">
      <h1>Expert Advice</h1>
      <div className="expert-cards">
        {experts.map((expert, index) => (
          <div key={index} className="expert-card">
            <h2>{expert.name}</h2>
            <h3>{expert.expertise}</h3>
            <p>{expert.description}</p>
            <a href={expert.link} target="_blank" rel="noopener noreferrer">
              <button className="join-button">Join</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertAdvice;