import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
      <NavLink className="navbar-brand" to="/">Who am I</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" activeClassName="active" exact to="/">Hobbies</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/favper">Favourite Personalities</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/favcit">Favourite Cities</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/favtour">Favourite Tourist Spots</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default NavBar