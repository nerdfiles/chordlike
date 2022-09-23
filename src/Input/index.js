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
    props && props.name,
    '__'
  ].join(GLUE)

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
        placeholder={props && props.name}
        required
        title='chord input'
        type='text'
      />
    </label>
  )
}

export default Input

// EOF
