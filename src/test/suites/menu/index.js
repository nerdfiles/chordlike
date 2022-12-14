/* global expect, test */
/**
 * @filepath ./src/test/suites/menu/index.js
 */
import { render, screen } from '@testing-library/react'
import App from '../../../App'

const menu = () => {
  render(<App />)
  const menu = screen.getAllByRole('menuitem')
  const EMPTY = 0
  const MENU_TOTAL = menu && menu.length
  expect(MENU_TOTAL).not.toBe(EMPTY)
}

export default menu

// EOF
