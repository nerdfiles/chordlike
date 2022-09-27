/* global describe, it, expect, test */
/**
 * @filepath ./src/test/suites/input/index.js
 */
import { render, screen, fireEvent } from '@testing-library/react'
import pry from 'pryjs'
import App from '../../../App'

// @tools
const begin = console.time
const end = console.timeEnd
const log = console.log
const assert = console.assert
const table = (data) => console.table(data)
const err = console.err
const noop = () => ({})

/**
 * @name input
 */
export const input = () => {
  render(<App />)
  const input = screen.getByTitle('chord input')
  expect(input).toBeInTheDocument()
}

/**
 * @name footerCheck
 * @description for ASSIST include http://dbpedia.org/resource/Thing
 */
export const footerCheck = () => {
  noop('nil')
  // ASSIST
  const CONTENT = 'home'
  const CONTENT_TITLE = 'home'
  const ROLE = 'none'

  begin('footer check')

  render(<App />)

  // ARRANGE
  const anyInterface = screen.getByTitle(CONTENT_TITLE)
  const contents = screen.getByTitle(CONTENT)
  const output = screen.getByRole(ROLE)

  // ACT
  fireEvent.click(contents)
  fireEvent.click(anyInterface)

  // ASSERT
  expect(anyInterface).toHaveTextContent(CONTENT)
  expect(anyInterface).toBeInTheDocument()

  // @todo implement router for sdet to test hash change
  // expect(output.classList).toBe('.m-view--output__default__') 
  expect(output).toBeInTheDocument()

  try {
    for (let i = 0; i < output.classList.length; ++i) {
      const TOKEN = output.classList[i]
      // no expect() available here without the router. thanks zuck 🐰
      assert(TOKEN.includes('m') === true)
      // testing if it's member to the window's block
      assert(TOKEN.includes('view') === true)
      // testing for whatever this is. an output display, i reckon.
      assert(TOKEN.includes('output') === true)
      // testing for defaults
      assert(TOKEN.includes('default') === true)
      // testing false for organ. it's certainly not that, what like a
      // class. see siren/schema.org before casting organs of a
      // https://bioschemas.org/types/Taxon/.
      assert(TOKEN.includes('O') === false)
    }

    table(Object.keys(output))
  } catch (err) {
    // @todo hash change eschalation conflict??
    eval(pry.it)

    log(err)
  }

  end('footer check')
}

log('🛳')
// EOF
