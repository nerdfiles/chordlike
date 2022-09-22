/**
 * @filepath ./src/App.js
 */
import './App.scss'
import { useState } from 'react'
import Setting from './Setting'
import Input from './Input'

/**
 * Chordlike.
 *
 * @note that we're configuring the input box for mobile, assistive 
 * tools.
 * @param {} props
 */
const Chordlike = (props) => {
  /**
   * @constant
   * @default
   */
  const [MODE, SETMODE] = useState('math')

  /**
   * @constant
   * @default
   */
  const DEFAULT_MODE = 'math' // '([0-9]*)', '+', '-', ...

  /**
   * @constant
   * @default
   */
  const LOGIC_MODE = 'fol' // '!', '>', '&', 'v', '()', '\∀', ...

  /**
   * @constant
   * @default
   */
  const TELEPHONE_MODE = 'tel' // '#', '*', ([0-9])

  /**
   * @constant
   * @default
   */
  const WEATHER_MODE = 'temp' // 'temp', ...

  /**
   * @constant
   * @default
   */
  const LOCATION_MODE = 'geo' // 'nearby', ...

  /**
   * @constant
   * @default
   */
  const CLOCK_MODE = 'now' // 'now', ...

  /**
   * @constant
   * @default
   */
  const WH_MODE = 'wh-*' // 'wh-*', ...

  /**
   * @constant
   * @default
   */
  const SEARCH_MODE = 'searchbox' // '([A-Za-z])', suggest logical operations and advanced search recipes as typing goes

  /**
   * @constant
   * @default
   */
  const MODE_SETTING = MODE || DEFAULT_MODE
  
  const CLASSNAME = 'm-view--list__default__'

  return (
    <>
      <Input name={MODE_SETTING} />

      <ul
        className={CLASSNAME}
        role='menu'
      >
        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={DEFAULT_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={LOGIC_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={TELEPHONE_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={WEATHER_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={LOCATION_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={CLOCK_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={WH_MODE}
            setMode={SETMODE}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            active={MODE_SETTING}
            name={SEARCH_MODE}
            setMode={SETMODE}
          />
        </li>
      </ul>
    </>
  )
}

/**
 * App.
 */
function App () {
  return (
    <>
      <Chordlike />
      <footer>
        <ul>
          <li><a href='https://sleepy-operation.surge.sh/'>home</a></li>
          <li><a href='https://github.com/nerdfiles/chordlike'>repo</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App

// EOF
