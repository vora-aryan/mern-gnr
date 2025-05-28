import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { ThemeContext } from "../Context/ThemeContextProvider";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Navbar Mounted");
  }, []);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar navbar-dark bg-${
        darkTheme ? "dark" : "primary"
      }`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/adduser">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/tasks">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/bank">
                Bank
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/mui">
                MUI
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={logOut} className="btn btn-danger">
                Log Out
              </button>
            </li>
            <li>
              <button
                className="theme-btn"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "10%",
                  borderColor: "transparent",
                  marginLeft: "100%",
                }}
              >
                <label className="switch">
                  <input onChange={() => toggleTheme()} type="checkbox" />
                  <span className="slider switch-white" />
                </label>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
