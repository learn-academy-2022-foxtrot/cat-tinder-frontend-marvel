import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe("<Footer/>", ()=> {
    test("Footer renders without errors", ()=> {
        render (
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        const element = screen.getByText("Marvel Tinder 2022")
        expect(element).toBeInTheDocument()
    })
})