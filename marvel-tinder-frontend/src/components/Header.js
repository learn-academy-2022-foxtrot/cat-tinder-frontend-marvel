import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import heroLogo from "../assets/superhero-logos-header.png"

const Header = () => {
  return (
    <Nav className="header-nav">
        
      <NavItem>
        <NavLink to="/">
          <img
            src={heroLogo}
            alt="Tinder Character logo with a hero being super"
            className="character-logo"
            style={{ height:"175px"}}
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/characterindex" className="nav-link">
          Meet the Characters
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/characternew" className="nav-link">
          Add a New Super Hero
        </NavLink>
      </NavItem>
      <NavItem>
        <a
          target="blank"
          href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
          className="nav-link"
        >
          Adopt a Cat!
        </a>
      </NavItem>
    </Nav>
  )
}

export default Header
