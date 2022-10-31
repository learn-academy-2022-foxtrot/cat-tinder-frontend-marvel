import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import {NavLink} from "react-router-dom"

const CharacterIndex = ({ characters }) => {
  return(
    <main>
        <>
        <h1>Get ready to match with your Super Hero</h1>
        {characters?.map((character, index) => {
            return(
            <>
                <Card 
                style={{ width: '18rem' }}
                key={index}
                >
                <img alt={`profile of a character named ${character.name}`} src={character.image} />
                <CardBody>
                    <NavLink to={`/charactershow/${character.id}`}>
                    {character.name}
                    </NavLink>
                </CardBody>
                </Card>
            </>
            )
        })}
        </>
    </main>
  )
}

export default CharacterIndex