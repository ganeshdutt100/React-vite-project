/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

export const Navbar = (props) => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  bg-body-secondary p-0">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1714462464~exp=1714466064~hmac=60354ab328491a48480d5cca203ac82f20764008f75da37dde8a0d78c3e78806&w=900" alt="" width={'70px'} height={'70px'} className=" rounded-circle"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
Navbar.propTypes ={
  about : PropTypes.string.isRequired,
}