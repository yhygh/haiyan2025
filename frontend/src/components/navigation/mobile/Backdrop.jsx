// backdrop is the background layer where the mobile side menu sits
const Backdrop = ({ closeBackdrop }) => (
  <div className="backdrop" onClick={closeBackdrop} />
);

export default Backdrop;
