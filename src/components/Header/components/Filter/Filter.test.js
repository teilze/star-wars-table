import { render, screen } from '@testing-library/react'

import { Filter } from './Filter'

const column = {
  getFilterValue: jest.fn()
}

test('renders Search By Name input field and icon', () => {
  render(<Filter column={column} />)
  const searchInputElement = screen.getByLabelText(/search by name\.\.\./i)
  const searchIcon = screen.getByTestId('SearchIcon')
  expect(searchInputElement).toBeInTheDocument()
  expect(searchIcon).toBeInTheDocument()
})
