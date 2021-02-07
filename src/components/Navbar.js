import React from "react";
import logo from "../images/logo.png";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="bermejo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Productos" onClick={this.handleToggle}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/Contacto" onClick={this.handleToggle}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
