/* global expect, test */
/**
 * @filepath ./src/test/suites/menu-click/index.js
 */
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../../App'

export const menuClick = () => {
  render(<App />)
  const menuitem = screen.getByTitle('setting: geo')
  fireEvent.click(menuitem)
  const input = screen.getByPlaceholderText('geo')
  expect(input).toHaveClass('m-view--input__geo__')
}

export const notMenuClick = () => {
  render(<App />)
  const menuitem = screen.getByTitle('setting: now')
  fireEvent.click(menuitem)
  const input = screen.getByPlaceholderText('now')
  expect(input.classList.contains('m-view--input__now__')).toBe(true)
  expect(input).not.toHaveClass('m-view--input__geo__')
}

// EOF
