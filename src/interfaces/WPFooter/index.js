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
          role='none'
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
          role='none'
        >
          <a
            title='docs'
            href='https://sleepy-operation.surge.sh/docs/'
          >
            docs
          </a>
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <a
            title='unit tests'
            href='https://sleepy-operation.surge.sh/report/ut-report/'
          >
            unit
          </a>
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <a
            title='code coverage'
            href='https://sleepy-operation.surge.sh/report/coverage/'
          >
            coverage
          </a>
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <a
            title='static code analysis'
            href='https://sleepy-operation.surge.sh/report/complexity/'
          >
            analysis
          </a>
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
        >
          <a
            title='accessibility of and for the accessible'
            href='https://wave.webaim.org/report#/https://sleepy-operation.surge.sh/'
          >
            <abbr title='accessibility'>#a11y</abbr>
          </a>
        </li>

        <li
          className='m-view--listing__default__'
          role='none'
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
