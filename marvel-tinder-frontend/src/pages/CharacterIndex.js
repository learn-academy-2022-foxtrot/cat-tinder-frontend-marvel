import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import {NavLink} from "react-router-dom"

const CharacterIndex = ({ characters  }) => {

    return(
        <>
          <h1>Get ready to get Super!</h1>     
          {characters?.map((character, index) => {
            return(
              <div key={index} className="character-index">
                <Card 
                  style={{ width: '18rem' }}
                >
                  <img src={character.image} alt="image of eligible super hero"/>
                  <CardBody>
                    <NavLink to={`/charactershow/${character.id}`}>
                      {character.name}
                    </NavLink>
                  </CardBody>
                </Card>
              </div>
            )
          })}
        </>
      )
    }
    
    export default CharacterIndex