import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import characterLogo from "../assets/xmen.png"
const Header = () => {
  return (
    <Nav className="header-nav">
        
      <NavItem>
        <NavLink to="/">
          <img
            src={characterLogo}
            alt="Character Tinder logo with two entertwined characters"
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
          Add a New Character
        </NavLink>
      </NavItem>
      <NavItem>
        <a
          target="blank"
          href="https://www.marvel.com/characters"
          className="nav-link"
        >
          Meet a Character
        </a>
      </NavItem>
    </Nav>
  )
}
export default Header