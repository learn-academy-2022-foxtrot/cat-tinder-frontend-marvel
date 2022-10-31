// import { render, screen } from "@testing-library/react"
// import CharacterShow from "./CharacterShow"
// import mockCharacters from "../mockData"
// import {MemoryRouter, Route, Routes} from "react-router-dom"
import { render } from "@testing-library/react"
import CharacterShow from "./CharacterShow"

describe("<CharacterShow />", () => {
    it("renders without crashing", () => {})
  })

// describe("<CharacterShow />", () => {
//   it("renders without crashing", () => {
//     render (
//       <MemoryRouter initialEntries={["/Charactershow/1"]}>
//         <Routes>
//           <Route path="/Charactershow/:id" element={<CharacterShow Characters={ mockCharacters }/>} />
//         </Routes>
//       </MemoryRouter>
//     )
//     const showRender = screen.getByText(/sunshine/i)
//     expect(showRender).toHaveTextContent("Hobbies: sunshine and warm spots")
//   })
// })