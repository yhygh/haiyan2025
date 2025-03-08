import { useState } from "react";

const IdeaForm = ({ handleAddIdea }) => {
  const [idea, setIdea] = useState("");

  return (
    <>
      <form onSubmit={() => handleAddIdea({ idea: idea, completed: false })}>
        <input
          type="text"
          name="idea"
          onChange={(e) => setIdea(e.target.value)}
        />
        <button>Add an idea</button>
      </form>
    </>
  );
};

export default IdeaForm;
