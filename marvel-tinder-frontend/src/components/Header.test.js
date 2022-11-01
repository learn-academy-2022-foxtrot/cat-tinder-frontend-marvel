import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Header from './Header'

describe("<Header/>", ()=> {
    test("Header renders without error", ()=>{
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText("Meet the Characters")
        expect(indexLink).toBeInTheDocument()     
    })
    test("Header has clickable links", ()=> {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Characters"))
        expect(screen.getByText("Meet the Characters")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Character"))
        expect(screen.getByText("Add a New Character")).toBeInTheDocument()
        userEvent.click(screen.getByText("Meet a Character"))
        expect(screen.getByText("Meet a Character")).toBeInTheDocument()
    })
    test('has a Nav tag with a className as "header-nav"', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const navTag = screen.getByText('Meet the Characters');
        screen.debug(navTag)
        expect(navTag).toHaveClass('nav-link')
    })
})