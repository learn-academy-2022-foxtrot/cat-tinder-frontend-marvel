import { render, screen } from '@testing-library/react'
import CharacterShow from './CharacterShow'
import mockCharacters from "../mockData"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("<CharacterShow />", () => {
    test("renders without crashing", () => {
        render (
            <MemoryRouter initialEntries={["/Charactershow/1"]}>
                <Routes>
                    <Route path="/Charactershow/:id" element={<CharacterShow Characters={ mockCharacters }/>} />
                </Routes>
            </MemoryRouter>
        )
        const showRender = screen.getByText([/sunshine/i)
        expect(showRender).toHaveTextContent("sunshine and warm spots")
    })
})