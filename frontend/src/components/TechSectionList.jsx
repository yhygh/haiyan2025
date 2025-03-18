import { useState } from "react";
import useTechSection from "../services/useTechSection";
import { useUser } from "./UserContext";
import TechSection from "./tech/TechSection";

const TechSectionList = () => {
  const { user } = useUser();
  const [techSection, setTechSection] = useState("");
  const [showTechForm, setShowTechForm] = useState(false);
  const {
    tsdata: techSections,
    loading,
    error,
    addTechSection,
    deleteTechsection,
    addGurulink,
    deleteGurulink,
  } = useTechSection();
  console.log(
    `in TechSectionList ==== techSections = ${JSON.stringify(techSections)}`
  );

  return (
    <>
      <h2>Tech Sections</h2>
      {user && user.isAdmin && (
        <>
          <button onClick={() => setShowTechForm(true)}>
            Add a Tech Section
          </button>
          {showTechForm && (
            <div>
              <form>
                <input
                  type="text"
                  value={techSection}
                  onChange={(e) => setTechSection(e.target.value)}
                />
                <button onSubmit={() => addTechSection({ name: techSection })}>
                  Create New Tech Section
                </button>
              </form>
              <button onClick={() => setShowTechForm(false)}>Cancel</button>
            </div>
          )}
        </>
      )}
      <div className="main-grid">
        {techSections.map((ts) => (
          <div key={ts._id}>
            <TechSection
              tsObj={ts}
              deleteTechsection={deleteTechsection}
              addGurulink={addGurulink}
              deleteGurulink={deleteGurulink}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechSectionList;
