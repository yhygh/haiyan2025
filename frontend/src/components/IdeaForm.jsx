import { useState } from "react";

const IdeaForm = ({ addIdea }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIdea({ idea: idea, completed: false });
  };

  // TODO: add front end idea input validation code

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
        <button type="submit" disabled={idea === ""}>
          Add an idea
        </button>
      </form>
    </div>
  );
};

export default IdeaForm;
