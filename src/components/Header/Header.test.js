import { render, screen } from '@testing-library/react'

import { Header } from './Header'

const column = {
  getFilterValue: jest.fn()
}

test('renders Search By Name input field and icon', () => {
  render(<Header column={column}/>)
  const searchInputElement = screen.getByLabelText(/search by name\.\.\./i)
  const searchIcon = screen.getByTestId('SearchIcon')
  expect(searchInputElement).toBeInTheDocument()
  expect(searchIcon).toBeInTheDocument()
})
