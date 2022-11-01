import React from "react"
import {useState} from 'react'
import mockCharacters from "./mockData"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CharacterEdit from "./pages/CharacterEdit"
import CharacterIndex from "./pages/CharacterIndex"
import CharacterNew from "./pages/CharacterNew"
import CharacterShow from "./pages/CharacterShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"

import "./App.css"

const App = () => {

  const [characters, setCharacters] = useState([])
  console.log(characters)

  // useEffect(() => {
  //   readCharacter() 
  // }, [])

  const readCharacter = () => {
  fetch("http://localhost:3000/characters")  // is the request
    .then((response) => response.json())
    .then((payload) => {
      setCharacters(payload)
    })
    .catch((errors) => console.log("Character read errors: ", errors))
  }

  const createCharacter = ( newCharacter ) => {
    fetch("http://localhost:3000/characters", {
      body: JSON.stringify(newCharacter),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(()=> readCharacter())
    .catch((errors) => console.log("Character create errors: ", errors))
  }

  const updateCharacter = () => {
    // console.log('updated cat: ', updatedCat)
  }

  const deleteCharacter = () => {
    // console.log(deletedCat)
  }


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/characteredit" element={<CharacterEdit/>} />
        <Route path="/characterindex" element={<CharacterIndex characters={ characters }/>} />
        <Route path="/characternew" element={<CharacterNew createCharacter={ createCharacter }/>} />
        <Route path="/charactershow/:id" element={<CharacterShow characters={ characters }/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )

}

export default App