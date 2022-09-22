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
        parser(props?.name, props?.setMode)
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

export default Setting

// EOF
