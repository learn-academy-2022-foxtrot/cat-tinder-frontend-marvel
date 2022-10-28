import Header from './Header'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe("<Header/>", ()=> {
    test("header renders without errors", ()=> {
        render (
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const element = screen.getByText("Find Super Hero Here!")
        expect(element).toBeInTheDocument()
    })
})