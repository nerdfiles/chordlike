/* global expect, test */
/**
 * @filepath ./src/App.test.js
 */
import link from './test/suites/link'
import menu from './test/suites/menu'
import { menuClick, notMenuClick } from './test/suites/menu-click'
import input from './test/suites/input'

const FIN = '🍩'
const WIP = '🔧'

test(`${FIN} renders repo link`, link)
test(`${FIN} renders menu`, menu)
test(`${FIN} renders clickable menu`, menuClick)
test(`${WIP} renders accurate menu`, notMenuClick)
test(`${FIN} renders input`, input)

// EOF
