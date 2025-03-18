import { useState } from "react";
import { useUser } from "../UserContext";

const TechSection = ({
  tsObj,
  deleteTechsection,
  addGurulink,
  deleteGurulink,
}) => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="main-grid-item">
      <div className="category-grid-item category-grid-item-title">
        {tsObj.name}
      </div>

      {user && user.isAdmin ? (
        <div>
          <button>Add a new Link</button>
          <form>
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
            <button
              onClick={() => addGurulink(tsObj._id, { title, url, comment })}
            >
              Create Guru Link
            </button>
          </form>
          <button onClick={() => deleteTechsection(tsObj._id)}>
            {" "}
            Delete Tech Section{" "}
          </button>
        </div>
      ) : null}

      {tsObj.links.map((link) => (
        <div className="category-grid-item" key={link._id}>
          <div>
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              {link.title}
            </a>
          </div>
          <div>{link.comment}</div>

          {user && user.isAdmin ? (
            <div>
              <span>
                <button onClick={() => deleteGurulink(tsObj._id, link._id)}>
                  X
                </button>
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TechSection;
