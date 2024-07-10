import React from 'react';
import logo from '../assets/title.png';
import { Link } from 'react-router-dom'; // Import Link instead of using <a>

function Navbar({ setToken,user }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken("");
    localStorage.removeItem('user');

    // No need to navigate with <a>, use Link for internal routing
  };

  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <Link to="/" class="logo me-auto">
          <img src={logo} alt="" class="img-fluid" />
        </Link> {/* Change <a> to Link for client-side routing */}

        <nav id="navbar" class="navbar justify">
          <ul>
            <li>
              <Link class="nav-link scrollto active" to="/">Home</Link> {/* Update href to to */}
            </li>
            <li>
              <Link class="nav-link scrollto" to="/about">About</Link> {/* Update href to to */}
            </li>
            <li>
              <Link class="nav-link scrollto" to="/downoald">downoald</Link> {/* Update href to to */}
            </li>
         {user.role === 'ADMIN'&&
            <li>
              <Link class="nav-link scrollto" to="/users">Users</Link> {/* Update href to to */}
            </li>
          }
            <li class="dropdown">
              <Link to="/">
                <span>Profile</span> 
                <i class="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link> {/* Use Link instead of <a> */}
                </li>
                <li>
                  <Link to="/editProfile">Edit Profile</Link> {/* Use Link instead of <a> */}
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>LogOut</Link> {/* Use Link instead of <a> */}
                </li>
              </ul>
            </li>
            <li>
              <Link class="getstarted scrollto" to="#about">Get Started</Link> {/* Use Link instead of <a> */}
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
