import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


const CharacterShow = ({characters}) => {
  const { id } = useParams()
  let showcharacter = characters?.find(character => character.id === +id)
  return(
    <>
      <h1>Thanks for checking out my profile</h1>
      {showcharacter && 
        <Card 
        style={{ width: '18rem' }}
        >
          <img src={showcharacter.image} alt="image of eligible feline"/>
          <CardBody>
            <CardTitle tag="h5">
              {showcharacter.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Age: {showcharacter.age}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Hobbies: {showcharacter.enjoys}

            </CardSubtitle>
          </CardBody>
        </Card>
      }
    </>
  )
}

export default CharacterShow