import React from 'react';
import { Link } from 'react-router-dom';

function NavbarView() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> <img style={{height:"40px" , width:"40px"}} className="rounded-circle" src="assets/img/logo.png" alt="logo" srcset="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/creatTeam"><i class="fas text-warning fa-plus pe-2"></i>Creat New Team</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavbarView;
