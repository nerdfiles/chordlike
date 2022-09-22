/**
 * @filepath ./src/App.js
 */
import './App.scss'
import { useState } from 'react'

/**
 * @constant
 * @default
 */
const GLUE = ''

/**
 * parser.
 *
 * @param {} input
 * @param {} callback
 */
const parser = (input, callback) => {
  /**
   * @constant
   * @default
   */
  const VALUE = input

  callback(VALUE)
}

/**
 * Input.
 *
 * @param {} props
 */
const Input = (props) => {
  /**
   * @constant
   * @default
   */
  const CLASSNAME = [
    'm-view--input',
    '__' + props?.name + '__'
  ].join(GLUE)

  return (
    <label
      className='m-view--label__default__'
      htmlFor='chord-input'
    >
      <input
        id='chord-input'
        name='chord-input'
        required
        aria-required='true'
        placeholder={props?.name}
        className={CLASSNAME}
        type='text'
      />
    </label>
  )
}

/**
 * Setting.
 *
 * @param {} props
 */
const Setting = (props) => {

  /**
   * @constant
   * @default
   */
  const EMPTY_CLASS = 'm-view--item__default__'

  /**
   * @constant
   * @default
   */
  const ACTIVE_CLASS = 'm-view--button__active__' 

  /**
   * @constant
   * @default
   */
  const CLASSNAME = props?.name === props?.active
    ? ACTIVE_CLASS
    : EMPTY_CLASS

  return (
    <button
      className={CLASSNAME}
      onClick={(e) => {
        parser(props?.name, props?.SETMODE)
      }}
      role='menuitem'
      title={[
        'setting: ',
        props?.name
      ].join(GLUE)}
    >
      {props?.name}
    </button>
  )
}

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
            name={DEFAULT_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={LOGIC_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={TELEPHONE_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={WEATHER_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={LOCATION_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={CLOCK_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={WH_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
          />
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <Setting
            name={SEARCH_MODE}
            SETMODE={SETMODE}
            active={MODE_SETTING}
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
