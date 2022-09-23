/* global expect, test */
/**
 * @filepath ./src/App.test.js
 */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders repo link', () => {
  render(<App />)
  const linkElement = screen.getByText(/repo/i)
  expect(linkElement).toBeInTheDocument()
})

test('check for menu', () => {
  render(<App />)
  const menu = screen.getAllByRole('menuitem')
  const EMPTY = 0
  const MENU_TOTAL = menu?.length
  expect(MENU_TOTAL).not.toBe(EMPTY)
})

// EOF
