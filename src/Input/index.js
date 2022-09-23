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
    const PARTS = VALUE.split(UNGLUE)
    const DATA = PARTS[PARTS.length - 1]
    const DATA_INPUT = Number(DATA)
    const STORE = []
    if (PARTS.length && isNaN(DATA_INPUT)) {
      const operator = PARTS && PARTS.splice(PARTS.length-1, 1)
      const outcome = PARTS.reduce((accumulatorRef, currentRef) => {
        return accumulatorRef + currentRef
      })
      STORE.push(outcome)
    }

    // @todo gettin' hairy
    const EXPRESSION = STORE[0]
    const OP_CHAR = '+'
    const OPERANDS = EXPRESSION && EXPRESSION.split(OP_CHAR)
    if (OPERANDS && OPERANDS.length > 1) {
      const leftOperand = Number(OPERANDS[0])
      const rightOperand = Number(OPERANDS[1])
      const OUTPUT = leftOperand + rightOperand
      SETINPUT(OUTPUT)
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
