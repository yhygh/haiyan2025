import { useState } from "react";

const TechSectionForm = ({ addTechSection, hideTechForm }) => {
  const [techSection, setTechSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTechSection({ name: techSection });
    setTechSection("");
    hideTechForm();
  };

  // TODO: add input validation code

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={techSection}
          onChange={(e) => setTechSection(e.target.value)}
        />
        <button type="submit" disabled={techSection === ""}>
          Create New Tech Section
        </button>
      </form>
    </div>
  );
};

export default TechSectionForm;
