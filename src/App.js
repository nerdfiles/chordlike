/**
 * @filepath ./src/App.js
 */
import './App.scss'
import Chordlike from './interface.norms/Chordlike'
import WPFooter from './interfaces/WPFooter'

/**
 * App.
 */
function App () {
  return (
    <div className='O-view--app__default__'>
      <Chordlike />
      <WPFooter />
    </div>
  )
}

export default App

// EOF
