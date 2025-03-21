import IdeaForm from "./IdeaForm";
import useIdea from "../services/useIdea";
import { useUser } from "./UserContext";

const Idea = () => {
  const { user } = useUser();
  const { data: ideas, loading, error, addIdea, deleteIdea } = useIdea();

  if (loading) {
    return <div>Loading ... </div>;
  }

  return (
    <>
      <div className="intro">
        <h2>Spontaneous Ideas</h2>
        <div className="idea-error">{error && <b>{error}</b>}</div>
        <IdeaForm addIdea={addIdea} />
        <div className="idealist-container">
          <ul className="idealist">
            {ideas.map((idea) => (
              <li key={idea._id}>
                {idea.idea}{" "}
                {user && (
                  <button onClick={() => deleteIdea(idea._id)}>X</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Idea;
