/* global expect, test */
/**
 * @filepath ./src/App.test.js
 */
import link from './test/suites/link'
import menu from './test/suites/menu'
import input from './test/suites/input'

test('renders repo link', link)
test('renders menu', menu)
test('renders input', input)

// EOF
