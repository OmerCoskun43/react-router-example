import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand ">
          <h3 className="text-danger px-3 bg-warning rounded-5 shadow-lg ">
            OMER COSKUN
          </h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/people"
                style={({ isActive }) => ({ color: isActive && "red" })}
                className="nav-link"
                aria-current="page"
              >
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/paths"
                style={({ isActive }) => ({ color: isActive && "red" })}
                className="nav-link"
                aria-current="page"
              >
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                style={({ isActive }) => ({ color: isActive && "red" })}
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
