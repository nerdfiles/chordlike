/**
 * @filepath ./src/Input/index.js
 */

/**
 * @constant
 * @default
 */
const GLUE = ''

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
    props?.name,
    '__'
  ].join(GLUE)

  return (
    <label
      className='m-view--label__default__'
      htmlFor='chord-input'
    >
      <input
        ariaRequired={true}
        className={CLASSNAME}
        id='chord-input'
        name='chord-input'
        placeholder={props?.name}
        required
        type='text'
      />
    </label>
  )
}

export default Input

// EOF
