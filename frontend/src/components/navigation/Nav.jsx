import { Link } from "react-router-dom";
import Logo from "../../images/shira-logo.png";
import { Fragment, useState } from "react";
import Hamburger from "./mobile/Hamburger";
import Backdrop from "./mobile/Backdrop";
import SideMenu from "./mobile/SideMenu";
import { useUser } from "../../components/UserContext";

const Nav = () => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const { user, logout } = useUser();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };

  // click the hamburger sign to open
  const toggleBackdrop = () => {
    setBackdropOpen(!backdropOpen);
  };

  const openPage = () => {};

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="Haiyan Home" />
      </a>
      <div className="hamburger-toggle-container">
        <div className="hamburger" onClick={toggleBackdrop}>
          <Hamburger />
        </div>
      </div>
      {backdropOpen && (
        <Fragment>
          <Backdrop closeBackdrop={() => setBackdropOpen(false)} />
          <SideMenu handleClick={openPage} />
        </Fragment>
      )}
      <div className="navbar-collapse">
        <ul className="navbar-page mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ai" className="nav-link">
              AI Fun
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/algorithms" className="nav-link">
              Algorithms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/techinfo" className="nav-link">
              Tech Warehouse
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ideas" className="nav-link">
              Ideas
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="logout">
            <div>
              <strong>Hello, {user} </strong>
            </div>
            <div>
              <button onClick={onLogout} className="btn btn-info btn-sm">
                Log out
              </button>
            </div>
          </div>
        ) : (
          <ul className="nav navbar-page">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
