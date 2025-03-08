import { Link } from "react-router-dom";
import React from "react";
import IdeaForm from "./IdeaForm";
import useIdea from "../services/useIdea";

const Idea = () => {
  const { data: ideas, loading, error, addIdea, deleteIdea } = useIdea();
  console.log(`ideas = ${JSON.stringify(ideas)}`);

  return (
    <>
      <h2>Spontaneous Ideas</h2>
      <IdeaForm handleAddIdea={addIdea} />
      <div className="intro">
        {ideas.map((idea) => (
          <li key={idea._id}>
            {idea.idea} <button onClick={() => deleteIdea(idea._id)}>X</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Idea;
