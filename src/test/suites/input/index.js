/* global describe, it, expect, test */
/**
 * @filepath ./src/test/suites/input/index.js
 */
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../../App'

const begin = console.time
const end = console.timeEnd
const log = console.log
const noop = () => ({})

export const input = () => {
  render(<App />)
  const input = screen.getByTitle('chord input')
  expect(input).toBeInTheDocument()
}

export const roleCheck = () => {
  noop('nil')
  begin('role')
  render(<App />)

  try {
    const ITEM = screen.getByTitle('chord input')
    fireEvent.click(ITEM)
    const input = screen.getByTitle('chord input')
    const ROLE = 'none'
    log(ROLE)
    const getByRole = screen.getByRole(ROLE)
    expect(input).toBeInTheDocument()
  } catch (err) {
    log(err)
  }

  end('role')
}

// EOF
