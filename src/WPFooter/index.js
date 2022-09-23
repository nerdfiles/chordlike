/**
 * @filepath ./src/WPFooter/index.js
 * @name WPFooter
 * @param {} props
 */
const WPFooter = (props) => {
  return (
    <footer
      itemScope
      itemType='https://schema.org/WPFooter'
    >
      <ul className='m-view--list__default__'>
        <li
          className='m-view--listing__default__'
        >
          <a
            title='home'
            href='https://sleepy-operation.surge.sh/'
          >
            home
          </a>
        </li>

        <li
          className='m-view--listing__default__'
        >
          <a
            title='repo'
            href='https://github.com/nerdfiles/chordlike'
          >
            repo
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default WPFooter

// EOF
