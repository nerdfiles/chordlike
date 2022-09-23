/* global expect, test */
/**
 * @filepath ./src/test/suites/input/index.js
 */
import { render, screen } from '@testing-library/react'
import App from '../../../App'

const input = () => {
  render(<App />)
  const input = screen.getByTitle('chord input')
  expect(input).toBeInTheDocument()
}

export default input

// EOF
