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
            style={{ display:"fluid", height:"250px"}}
          />
        </NavLink>
      </NavItem>

      <div className="meetCharacters">
      <NavItem>
        <NavLink to="/characterindex" className="nav-link">
          Meet the Characters
        </NavLink>
      </NavItem>
      </div>

      <div>
      <NavItem>
        <NavLink to="/characternew" className="nav-link">
          Add a New Super Hero
        </NavLink>
      </NavItem>
      </div>

      <div>
      <NavItem>
        <a
          target="blank"
          href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
          className="nav-link"
        >
          Adopt a Cat!
        </a>
      </NavItem>
      </div>

    </Nav>
  )
}

export default Header

// import React from "react";

// const Header = () => {
//     return (
//         <>
//           <div className="header" > 
//             <>Find Super Hero Here!</> 
//           </div> 
//           <br/>
//         </>
//     )
//     }
    
//     export default Header