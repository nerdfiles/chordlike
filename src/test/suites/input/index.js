/* global describe, it, expect, test */
/**
 * @filepath ./src/test/suites/input/index.js
 */
import { render, screen, fireEvent } from '@testing-library/react'
import pry from 'pryjs'
import App from '../../../App'

const begin = console.time
const end = console.timeEnd
const log = console.log
const noop = () => ({})

/**
 * input.
 */
export const input = () => {
  render(<App />)
  const input = screen.getByTitle('chord input')
  expect(input).toBeInTheDocument()
}

/**
 * footerCheck.
 */
export const footerCheck = () => {
  noop('nil')
  const CONTENT = 'home'
  const CONTENT_TITLE = 'home'

  begin('footer check')

  // ARRANGE
  render(<App />)

  try {
    // ACT
    fireEvent.click(screen.getByTitle(CONTENT))

    // ASSERT
    const anyInterface = screen.getByTitle(CONTENT_TITLE)
    expect(anyInterface).toHaveTextContent(CONTENT)

    // const ROLE = 'none'
    // log(ROLE)
    // const getByRole = screen.getByRole(ROLE)
    // log(getByRole)
    // fireEvent.click(ITEM)
    // @todo change input or type

    expect(anyInterface).toBeInTheDocument()
  } catch (err) {
    // @todo hash change eschalation conflict??
    eval(pry.it)
    log(err)
  }

  end('footer check')
}

// EOF
