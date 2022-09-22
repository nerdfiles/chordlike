/**
 * @constant
 * @default
 */
const GLUE = ''

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

export default Input

// EOF
