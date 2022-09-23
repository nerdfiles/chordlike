/* global expect, test */
/**
 * @filepath ./src/test/suites/link/index.js
 */
import { render, screen } from '@testing-library/react'
import App from '../../../App'

const link = () => {
  render(<App />)
  const linkElement = screen.getByText(/repo/i)
  expect(linkElement).toBeInTheDocument()
}

export default link

// EOF
