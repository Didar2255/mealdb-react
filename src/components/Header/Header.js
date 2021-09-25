import React from 'react';
import logo from '../../Image/icon.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark ">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="/#"> <img src={logo} alt="" width="100" height="70" class="d-inline-block align-text-top" />MealDB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/#">Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/#">Today Offer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/#">Contact Us</a>
            </li>
          </ul>
          <form className="d-flex flex-fill mx-5">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success bg-primary text-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;