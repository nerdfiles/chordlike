/**
 * @filepath ./src/Chordlike/index.js
 * @description
 * # chordlike index
 * ## index
 *
 * minimum design contribution schema[0]:
 *
 * `[∼]StereotypeName::Meta-attributeName::value;`
 *
 * https://www.semanticscholar.org/paper/Semantics-and-Model-Driven-Design-Patterns-Kajsa/eda1de3aefd4b67a2155ec44cb7aa823c181d300
 */
import { useState } from 'react'
import Setting from '../Setting'
import Input from '../../interface.parts/Input'

const F = (props) => {
  return (
    <div
      id='abcd1234'
      className={props.context}
    >
      <stacked-form--footer__default__ />
    </div>
  )
}

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
  const [mode, setMode] = useState(DEFAULT_MODE)

  /**
   * @constant
   * @default
   */
  const MODE_SETTING = mode || DEFAULT_MODE

  /**
   * @constant
   * @default
   */
  const CLASSNAME = 'm-view--list__default__'

  /**
   * @constant
   * @default
   */
  const INTERFACE_MENU = [
    getSetting(MODE_SETTING, DEFAULT_MODE, setMode),
    getSetting(MODE_SETTING, LOGIC_MODE, setMode),
    getSetting(MODE_SETTING, TELEPHONE_MODE, setMode),
    getSetting(MODE_SETTING, WEATHER_MODE, setMode),
    getSetting(MODE_SETTING, LOCATION_MODE, setMode),
    getSetting(MODE_SETTING, CLOCK_MODE, setMode),
    getSetting(MODE_SETTING, WH_MODE, setMode),
    getSetting(MODE_SETTING, SEARCH_MODE, setMode)
  ]

  return (
    <div
      rel='rel'
      href='https://ex.app/p?s=0&p=0&o=0&g=0'
      role='main'
    >
      <form
        accept='game+application/json'
        action='https://ex.app/p{?s,p,o,g}'
        className='accessibly-hide'
        name='name'
        id='chord'
        method='get'
        role='region'
      >
        <fieldset>
          <label htmlFor='chord' />
        </fieldset>
      </form>

      <F content='[sm-] [md-] [lg-]' />

      <h1 className='m-view--headline__default__'>chordlike</h1>

      <div className='m-view--dashboard__default__'>
        <Input
          name={MODE_SETTING}
        />
      </div>

      <ul
        className={CLASSNAME}
        role='menu'
      >
        {
          INTERFACE_MENU && INTERFACE_MENU.length
            ? INTERFACE_MENU.map((el, index) => {
              return (
                <li
                  key={index}
                  className='m-view--listing__default__'
                  role={el}
                >
                  {el}
                </li>
              )
            }) : (
              <li
                className='m-view--listing__empty__'
              >
                no <link rel='null'>interface</link> items available
              </li>
            )
        }
      </ul>
    </div>
  )
}

export default Chordlike

// EOF
