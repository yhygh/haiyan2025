import { useState } from "react";
import useIdea from "../services/useIdea";

const IdeaForm = () => {
  const [idea, setIdea] = useState("");
  const { addIdea } = useIdea();

  const handleSubmit = (e) => {
    e.preventDefault();
    addIdea({ idea: idea, completed: false });
  };

  return (
    <div className="ideacontainer">
      <form onSubmit={handleSubmit}>
        <textarea
          minLength={10}
          maxLength={100}
          placeholder="Add your idea here ..."
          name="idea"
          onChange={(e) => setIdea(e.target.value)}
        />
        <button>Add an idea</button>
      </form>
    </div>
  );
};

export default IdeaForm;
