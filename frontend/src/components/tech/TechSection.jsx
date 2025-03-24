import { useState } from "react";
import { useUser } from "../UserContext";

const TechSection = ({
  tsObj,
  deleteTechsection,
  addGurulink,
  deleteGurulink,
}) => {
  const { user } = useUser();
  const [showGuruLinkForm, setShowGuruLinkForm] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGurulink(tsObj._id, { title, url, comment });
    setShowGuruLinkForm(false);
  };

  const shouldDisable = title === "" || url === "";

  return (
    <div className="main-grid-item">
      <div className="category-grid-item category-grid-item-title">
        {tsObj.name}{" "}
        {user && user.isAdmin && (
          <button onClick={() => deleteTechsection(tsObj._id)}> X </button>
        )}
      </div>
      {user && user.isAdmin ? (
        <div>
          {!showGuruLinkForm && (
            <button onClick={() => setShowGuruLinkForm(true)}>
              Add a new Link
            </button>
          )}
          {showGuruLinkForm && (
            <form onSubmit={handleSubmit}>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                name="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                name="comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" disabled={shouldDisable}>
                Create Guru Link
              </button>
              <button onClick={() => setShowGuruLinkForm(false)}>Cancel</button>
            </form>
          )}
        </div>
      ) : null}

      {tsObj.links.map((link) => (
        <div className="category-grid-item" key={link._id}>
          <div>
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              {link.title}
            </a>
            {user && user.isAdmin ? (
              <span>
                <button onClick={() => deleteGurulink(tsObj._id, link._id)}>
                  X
                </button>
              </span>
            ) : null}
          </div>
          <div>{link.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default TechSection;
