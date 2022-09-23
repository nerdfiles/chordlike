/**
 * @filepath ./src/Input/index.js
 */
import { useEffect, useState, useRef } from 'react'
const log = console.log

/**
 * @constant
 * @default
 */
const GLUE = ''
const UNGLUE = ''

/**
 * @name Input
 * @param {} props
 */
const Input = (props) => {
  /**
   * @constant
   * @default
   */
  const CLASSNAME = [
    'm-view--input',
    '__',
    props && props.name,
    '__'
  ].join(GLUE)

  const [INPUT, SETINPUT] = useState(0)

  const INPUT_ELEMENT = useRef(null)

  /**
   * @name onChangeHandler
   * @param {Event} event - .
   */
  const onChangeHandler = (event) => {
    const VALUE = event && event.target && event.target.value
    const str = VALUE.split(UNGLUE)
    const curr = str[str.length-1]
    const t = Number(curr)
    const col = []
    if (str.length && isNaN(t)) {
      const operator = str && str.splice(str.length-1, 1)
      const outcome = str.reduce((accumulatorRef, currentRef) => {
        return accumulatorRef + currentRef
      })
      col.push(outcome)
    }

    // @todo gettin' hairy
    const d = col[0]
    const by = '+'
    const y = d && d.split(by)
    if (y && y.length > 1) {
      const leftOperand = Number(y[0])
      const rightOperand = Number(y[1])
      const o = leftOperand + rightOperand
      SETINPUT(o)
    }

    event.preventDefault()
  }

  return (
    <label
      className='m-view--label__default__'
      htmlFor='chord-input'
    >
      <span className='m-view--labeltext__default__'>yo</span>
      <input
        aria-required
        className={CLASSNAME}
        id='chord-input'
        name='chord-input'
        onChange={onChangeHandler}
        placeholder={props && props.name}
        ref={INPUT_ELEMENT}
        required
        title='chord input'
        type='text'
      />
      <span className='m-view--output__default__'>{INPUT}</span>
    </label>
  )
}

export default Input

// EOF
