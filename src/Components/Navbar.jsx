import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <img className='img-fluid me-3' src="Public/Logo/logo.jpg" style={{width:'4%'}} alt="" />
    <Link className="navbar-brand" to="/">Online Pharmacy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">ContactUs</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active border border-2 rounded" aria-current="page" href="/">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active border border-2 rounded" aria-current="page" href="/">Sign-Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar