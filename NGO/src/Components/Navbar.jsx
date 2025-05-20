import React from "react";
import { Link } from "react-router-dom"; // Use this if you're using React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FF6600" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/member-apply" style={{ color: "white" }}>
                Member Apply
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/id-card-download" style={{ color: "white" }}>
                ID Card Download
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/upcoming-event" style={{ color: "white" }}>
                Upcoming Event
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/donate" style={{ color: "white" }}>
                Donate
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/donors" style={{ color: "white" }}>
                List of Donors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery" style={{ color: "white" }}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: "white" }}>
                Contact Us
              </Link>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#FF6600" }}>
                <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                <li><Link className="dropdown-item" to="/management-team">Management Team</Link></li>
                <li><Link className="dropdown-item" to="/our-team">Our Team</Link></li>
                <li><Link className="dropdown-item" to="/achievements">Achievements</Link></li>
                <li><Link className="dropdown-item" to="/certifications">Certifications</Link></li>
              </ul>
            </li>

            {/* Important Links Dropdown */}
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdownLinks"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ color: "white" }}
  >
    Important Links
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdownLinks" style={{ backgroundColor: "#FF6600" }}>
    <li><Link className="dropdown-item" to="/crowd-funding">Crowd Funding</Link></li>
    <li><Link className="dropdown-item" to="/our-solution">Our Solution</Link></li>
    <li><Link className="dropdown-item" to="/your-problem">Your Problem</Link></li>
    <li><Link className="dropdown-item" to="/our-project">Our Project</Link></li>
  </ul>
</li>


            <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="loginDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ color: "white" }}
  >
    Login
  </a>
  <ul className="dropdown-menu" aria-labelledby="loginDropdown" style={{ backgroundColor: "#FF6600" }}>
    <li>
      <Link className="dropdown-item" to="/login/coordinator">Coordinator Login</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/login/manager">Manager Login</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/community">Community</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/member-apply">Join Us</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/crowd-funding">Crowdfunding</Link>
    </li>
  </ul>
</li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
