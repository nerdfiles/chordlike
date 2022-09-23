/**
 * @filepath ./src/Chordlike/index.js
 */
import { useState } from 'react'
import Setting from '../Setting'
import Input from '../Input'

/**
 * @name getSetting
 * @param {} occasion
 * @param {} name
 * @param {} callback
 */
const getSetting = (occasion, name, callback) => {
  return (
    <Setting
      active={occasion}
      name={name}
      setMode={callback}
    />
  )
}

/**
 * @name Chordlike
 * @description that we're configuring the input box for mobile, assistive
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

  /**
   * @constant
   * @default
   */
  const CLASSNAME = 'm-view--list__default__'

  /**
   * @constant
   * @default
   */
  const INTERFACE = [
    getSetting(MODE_SETTING, DEFAULT_MODE, SETMODE),
    getSetting(MODE_SETTING, LOGIC_MODE, SETMODE),
    getSetting(MODE_SETTING, TELEPHONE_MODE, SETMODE),
    getSetting(MODE_SETTING, WEATHER_MODE, SETMODE),
    getSetting(MODE_SETTING, LOCATION_MODE, SETMODE),
    getSetting(MODE_SETTING, CLOCK_MODE, SETMODE),
    getSetting(MODE_SETTING, WH_MODE, SETMODE),
    getSetting(MODE_SETTING, SEARCH_MODE, SETMODE)
  ]

  return (
    <>
      <div className='m-view--dashboard__default__'>
        <Input
          name={MODE_SETTING}
        />
      </div>

      <ul
        className={CLASSNAME}
        role='menu'
      >
        {INTERFACE?.length
          ? INTERFACE.map((el) => {
            return (
              <li
                className='m-view--listing__default__'
                role='none'
              >
                {el}
              </li>
            )
          }) : <li>no interface items available</li>
        }
      </ul>
    </>
  )
}

export default Chordlike

// EOF
