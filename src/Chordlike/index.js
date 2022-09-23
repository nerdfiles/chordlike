/**
 * @filepath ./src/Chordlike/index.js
 */
import { useState } from 'react'
import Setting from '../Setting'
import Input from '../Input'

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
  const DEFAULT_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={DEFAULT_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const LOGIC_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={LOGIC_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const TELEPHONE_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={TELEPHONE_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const WEATHER_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={WEATHER_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const LOCATION_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={LOCATION_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const CLOCK_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={CLOCK_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const WH_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={WH_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const SEARCH_MODE_ITEM = (
    <Setting
      active={MODE_SETTING}
      name={SEARCH_MODE}
      setMode={SETMODE}
    />
  )

  /**
   * @constant
   * @default
   */
  const INTERFACE = [
    DEFAULT_MODE_ITEM,
    LOGIC_MODE_ITEM,
    TELEPHONE_MODE_ITEM,
    WEATHER_MODE_ITEM,
    LOCATION_MODE_ITEM,
    CLOCK_MODE_ITEM,
    WH_MODE_ITEM,
    SEARCH_MODE_ITEM
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
