import { Link } from "react-router-dom";
import { useUser } from "../../UserContext";

// SideMenu only shows up on mobile devices after clicking the hamburger icon

// TODO: recover the transitional property of the side menu
const SideMenu = ({ handleClick }) => {
  let drawerClasses = "side-drawer";
  const { user, logout } = useUser();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/ai" className="nav-link">
            AI Fun
          </Link>
        </li>
        <li>
          <Link to="/algorithms" className="nav-link">
            Algorithms
          </Link>
        </li>
        <li>
          <Link to="/techinfo" className="nav-link">
            Tech Warehouse
          </Link>
        </li>
        <li>
          <Link to="/ideas" className="nav-link">
            Ideas
          </Link>
        </li>
      </ul>
      {/** add authenticate part later */}
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
  );
};

export default SideMenu;

// {props.currentUser.isAuthenticated ? (
//   <Fragment>
//     <li>Logged in as {props.currentUser.user.username}</li>
//     <li>
//       <button onClick={props.logout}>Log out</button>
//     </li>
//   </Fragment>
// ) : (
//   <Fragment>
//     <li>
//       <Link to="/signin" className="btn btn-info btn-sm">
//         Log in
//       </Link>
//     </li>
//     <li>
//       <Link to="/signup" className="btn btn-info btn-sm">
//         Sign up
//       </Link>
//     </li>
//   </Fragment>
// )}
