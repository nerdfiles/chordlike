/**
 * @filepath ./src/Setting/index.js
 */

/**
 * @constant
 * @default
 */
const GLUE = ''

/**
 * @name parser
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
 * @name Setting
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
  const CLASSNAME = props && (props.name === props.active)
    ? ACTIVE_CLASS
    : EMPTY_CLASS

  /**
   * @constant
   * @default
   */
  const NAME = props && props.name

  /**
   * @constant
   * @default
   */
  const TITLE = ['setting: ', NAME].join(GLUE)

  return (
    <button
      className={CLASSNAME}
      onClick={(e) => {
        parser(props && props.name, props && props.setMode)
      }}
      role='menuitem'
      title={TITLE}
    >
      {props && props.name}
    </button>
  )
}

export default Setting

// EOF
