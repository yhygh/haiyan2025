import { useState } from "react";
import useTechSection from "../services/useTechSection";
import { useUser } from "./UserContext";
import TechSection from "./tech/TechSection";
import TechSectionForm from "./tech/TechSectionForm";

const TechSectionList = () => {
  const { user } = useUser();
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

  return (
    <>
      <h2>Tech Sections</h2>
      <h3>All links in this page are retrieved from a backend database.</h3>
      {user && user.isAdmin && (
        <div className="add-tech-section">
          {!showTechForm && (
            <button onClick={() => setShowTechForm(true)}>
              Add a Tech Section
            </button>
          )}
          {showTechForm && (
            <div className="techform-action">
              <TechSectionForm
                addTechSection={addTechSection}
                hideTechForm={() => setShowTechForm(false)}
              />
              <div>
                <button onClick={() => setShowTechForm(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
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
