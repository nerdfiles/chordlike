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
   * @description change handler.
   * @todo should probably use the dispatching method or something other than 
   * this! sure it's a handler, but it's too many lines!
   * @param {Event} event - .
   */
  const onChangeHandler = (event) => {
    const DEFAULT_OP = '+'
    const VALUE = event && event.target && event.target.value
    const PARTS = VALUE.split(UNGLUE)
    const DATA = PARTS[PARTS.length - 1]
    const DATA_INPUT = Number(DATA)
    const STORE = []

    // grouping input numbers until there's a NaN. it ain't smart and it ain't
    // fast but it also ain't cheap.
    if (PARTS.length && isNaN(DATA_INPUT)) {
      const OP_CODE = PARTS && PARTS.splice(PARTS.length-1, 1)
      log('💧 storing OP_CODE:', OP_CODE)
      const outcome = PARTS.reduce((accumulatorRef, currentRef) => {
        return accumulatorRef + currentRef
      })

      STORE.push([OP_CODE, outcome])
    }

    const OPERATOR_POSITION = 1
    const EXPRESSION = STORE && STORE.length && STORE[0][1]
    log(EXPRESSION)
    const EX = EXPRESSION && EXPRESSION.split(UNGLUE)
    log(EX)
    const OP_CHAR = EX[OPERATOR_POSITION] || DEFAULT_OP
    log(OP_CHAR)
    const OPERANDS = EXPRESSION && EXPRESSION.split(OP_CHAR)
    log(OPERANDS)

    // will do nothing if computer can't split by the input in question
    if (OPERANDS && OPERANDS.length > 1) {
      const leftOperand = Number(OPERANDS[0])
      const rightOperand = Number(OPERANDS[1])
      const OUTPUT = leftOperand + rightOperand
      log(OUTPUT)

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
