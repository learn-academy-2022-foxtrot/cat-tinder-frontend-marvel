import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", ()=> {
    test("renders the home page for the user", ()=> {
        render(<Home/>)
        const element = screen.getByText("It's like Tinder, but for Characters!")
        expect(element).toBeInTheDocument()
    })

    test("has an image with src and alt attributes", () => {
        render(<Home />)
        screen.debug(screen.getAllByRole('img'))
        const characterImage = screen.getAllByRole('img')[0]
        expect(characterImage).toHaveAttribute('src', 'xmen.png')
        expect(characterImage).toHaveAttribute('alt', 'fluffy gray character with sunglasses')


    })

})