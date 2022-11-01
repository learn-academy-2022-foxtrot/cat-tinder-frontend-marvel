import { render, screen } from "@testing-library/react"
import CharacterShow from "./CharacterShow"
import mockCharacters from "../mockData"
import {MemoryRouter, Route, Routes} from "react-router-dom"
describe("<CharacterShow />", () => {
  it("renders without crashing", () => {
    render (
      <MemoryRouter initialEntries={["/charactershow/1"]}>
        <Routes>
          <Route path="/charactershow/:id" element={<CharacterShow characters={ mockCharacters }/>} />
        </Routes>
      </MemoryRouter>
    )
    const showRender = screen.getByText(/sunshine/i)
    expect(showRender).toHaveTextContent("Hobbies: sunshine and warm spots")
  })
})