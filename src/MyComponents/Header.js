import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";





export default function Header(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>{props.title}</b> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Add TODO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Home</Link></li>
                  <li><Link className="dropdown-item" to="/about">About</Link></li >
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="https://www.linkedin.com/in/nema-chandra-goswami/">Something About ME!</Link></li>
                </ul>
              </li>
            </ul>
            {props.searchbar?
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:" "}
          </div>
        </div>
      </nav>
    </div>    
    )
}

//not required but for testing
Header.defaultProps = {
    title: "Default todo",
    searchbar: false
}

Header.propTypes = {
    title: PropTypes.string,
    searcbar: PropTypes.bool.isRequired   //for making required
}

