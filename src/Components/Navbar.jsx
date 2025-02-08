import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img className="img-fluid me-3" src="/Logo/logo.jpg" style={{ width: '4%' }} alt="" />
          <Link className="navbar-brand" to="/">PharmaCare</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contactus">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active border border-2 rounded mx-3 my-2" to="/offers">Offers</Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link active border border-2 rounded my-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="nav-link active border border-2 rounded my-2" onClick={() => loginWithRedirect()}>
                    Log In
                  </button>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link active rounded mx-3 my-1" to="/cart">
                  <button type="button" className="btn btn-primary position-relative">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
