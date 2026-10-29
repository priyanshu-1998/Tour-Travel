
import { NavLink, Link } from "react-router-dom";
import "./Css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg travel-navbar sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand travel-logo" to="/">
          <span className="logo-icon">✈</span>
          Travel<span>Go</span>
        </Link>

        {/* Mobile Toggle */}
         <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#travelNavbar"
          aria-controls="travelNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="travelNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/destination">
                Destination
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/package">
                Packages
              </NavLink>
            </li>

            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Booking Button */}
          <Link to="/booking" className="nav-book-btn">
            Book Now <span>↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
