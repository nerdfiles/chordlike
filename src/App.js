import './App.scss'
import { useState } from 'react'

/**
 * parser.
 *
 * @param {} input
 * @param {} callback
 */
const parser = (input, callback) => {
  const VALUE = input
  callback(VALUE)
}

/**
 * Input.
 *
 * @param {} props
 */
const Input = (props) => {

  return (
    <label htmlFor=''>
      <input
        id='chord-input'
        name='chord-input'
        required
        aria-required='true'
        placeholder={props?.name}
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
  const GLUE = ''

  return (
    <button
      title={[
        'setting: ',
        props?.name
      ].join(GLUE)}
      onClick={(e) => parser(props?.name, props?.setMode)}
    >
      {props?.name}
    </button>
  )
}

/**
 * Chordlike.
 *
 * @param {} props
 */
const Chordlike = (props) => {
  const [mode, setMode] = useState('math')
  // @note that we're configuring the input box for mobile, assistive tools.
  const DEFAULT_MODE = 'math' // '([0-9]*)', '+', '-', ...
  const LOGIC_MODE = 'fol' // '!', '>', '&', 'v', '()', '\∀', ...
  const TELEPHONE_MODE = 'tel' // '#', '*', ([0-9])
  const SEARCH_MODE = 'searchbox' // '([A-Za-z])', suggest logical operations and advanced search recipes as typing goes
  const MODE_SETTING = mode || DEFAULT_MODE

  return (
    <>
      <Input name={MODE_SETTING} />
      <Setting name={DEFAULT_MODE} setMode={setMode} />
      <Setting name={LOGIC_MODE} setMode={setMode} />
      <Setting name={TELEPHONE_MODE} setMode={setMode} />
      <Setting name={SEARCH_MODE} setMode={setMode} />
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
    </>
  )
}

export default App
