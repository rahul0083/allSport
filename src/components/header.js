import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="d-flex align-items-center col-12 col-md-3 mb-2 mb-md-0 text-center text-md-start">
          <a href="/" className="text-white text-decoration-none">
            <span className="navbar-toggler-icon"></span>
            Menu
          </a>
        </div>

        <div className="col-12 col-md-3 text-center text-md-end">
          <img
            src="././uttarakhandlogo.svg"
            className="uttarakhand-logo img-fluid"
            width="136.28px"
            height="114.3px"
          />
        </div>

        <div className="col-12 col-md-6 text-center text-md-end d-flex align-items-center justify-content-center justify-content-md-end">
          <ul className="nav col-auto mb-2 mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary text-white">
                <img src="././Vectorticketing.svg" className="img-fluid" />
                <span className="ms-2">Ticketing</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-secondary text-white">
                <img src="././Vectorshop.svg" className="img-fluid" />
                <span className="ms-2">Shop</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-secondary text-white">
                Login
              </a>
            </li>
          </ul>

          <form className="d-flex ms-md-2" role="search">
            <input
              className="form-control me-2 bg-transparent text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;