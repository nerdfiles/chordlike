/* global expect, test */
import { render, screen } from '@testing-library/react'
import App from '../../../App'

const links = () => {
  render(<App />)
  const linkElement = screen.getByText(/repo/i)
  expect(linkElement).toBeInTheDocument()
}

export default links
