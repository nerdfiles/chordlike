/**
 * @filepath ./src/Input/index.js
 */
import { useState, useRef } from 'react'
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

    const PLUS_OP = '+'
    const MINUS_OP = '-'
    const DIVIDE_OP = '%'
    const MULTIPLY_OP = '*'
    const EXPRESSION = STORE && STORE.length && STORE[0][1]
    const OP_TEMP = EXPRESSION && EXPRESSION.split('')
    const OP_CHAR = OP_TEMP && OP_TEMP.length && OP_TEMP.filter((i, k) => {
      return (
        i === PLUS_OP ||
        i === MINUS_OP ||
        i === DIVIDE_OP ||
        i === MULTIPLY_OP
      )
    })
    const OPERANDS = EXPRESSION && EXPRESSION.split(OP_CHAR)
    const isWellFormed = OPERANDS && OPERANDS.length > 1
    const _OP = OP_CHAR[0]

    switch (_OP) {
      case PLUS_OP:
        if (isWellFormed) {
          const leftOperand = Number(OPERANDS[0])
          const rightOperand = Number(OPERANDS[1])
          const OUTPUT = leftOperand + rightOperand
          SETINPUT(OUTPUT)
        }

        break
      case MINUS_OP:
        if (isWellFormed) {
          const leftOperand = Number(OPERANDS[0])
          const rightOperand = Number(OPERANDS[1])
          const OUTPUT = leftOperand - rightOperand
          SETINPUT(OUTPUT)
        }

        break
      case DIVIDE_OP:
        if (isWellFormed) {
          const leftOperand = Number(OPERANDS[0])
          const rightOperand = Number(OPERANDS[1])
          const OUTPUT = leftOperand / rightOperand
          SETINPUT(OUTPUT)
        }

        break
      case MULTIPLY_OP:
        if (isWellFormed) {
          const leftOperand = Number(OPERANDS[0])
          const rightOperand = Number(OPERANDS[1])
          const OUTPUT = leftOperand * rightOperand
          SETINPUT(OUTPUT)
        }

      default:
        log('◯ nil')
        break
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
