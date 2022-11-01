import { render, screen } from '@testing-library/react'
import CharacterNew from './CharacterNew'
import {BrowserRouter} from 'react-router-dom'
describe('<CharacterNew/>', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <CharacterNew />
      </BrowserRouter>
      )
  })
  test('renders the CharacterNew page for the user', () => {

    const characterNewHeading = screen.getByText(/character new/i)

    expect(characterNewHeading).toHaveTextContent('Character New!')
  })
  test('has a form with entries for name, age, enjoys, and image', () => {
    const nameLabel = screen.getByText(/name/i)
    screen.debug()
    expect(nameLabel.getAttribute('for')).toEqual('name')
    const ageLabel = screen.getByText('Age')
    screen.debug(ageLabel)
    expect(ageLabel.getAttribute('for')).toEqual('age')
  })
})