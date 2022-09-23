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
  const CLASSNAME = props?.name === props?.active
    ? ACTIVE_CLASS
    : EMPTY_CLASS

  /**
   * @constant
   * @default
   */
  const TITLE = [
    'setting: ',
    props?.name
  ].join(GLUE)

  return (
    <button
      className={CLASSNAME}
      onClick={(e) => {
        parser(props?.name, props?.setMode)
      }}
      role='menuitem'
      title={TITLE}
    >
      {props?.name}
    </button>
  )
}

export default Setting

// EOF
