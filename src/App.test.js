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

// EOF
