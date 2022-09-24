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

/**
 * @constant
 * @default
 */
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
      const POS = PARTS.length - 1
      const DEL = 1
      const OP_CODE = PARTS && PARTS.splice(POS, DEL)

      log('💧 storing OP_CODE:', OP_CODE)

      const outcome = PARTS.reduce((accumulatorRef, currentRef) => {
        return accumulatorRef + currentRef
      })

      // here's where we would publish to a hypermedia API, for a media 
      // type that represents a calculator, or the structure of the space
      // of possibility for a calculator. what could this include? typically
      // we may find wittgenstein's line of inquiry or "therapy" practical
      // in naming desirable extra-logical modes which could fall within
      // the domain of a calculator's capabilities. wittgenstein asks if
      // placing pieces on a chess board count as "moves." some might wonder.
      // certainly we consider it "chess knowledge" to motion for a "blitz"
      // game which entails pieces are placed just-so but as yet the mentality
      // of the players is to be adjusted: are mental postures "moves" in
      // the game of chess? at any rate, we might say that "competitive/best pay challenges"
      // in chess require that players adjust the board accordingly: are
      // these so too moves in the game of chess? how long does it take for
      // one to get good at such a practice, placing pieces in instructive
      // and competitive ways (e.g., "white to caste in N moves", "which
      // move can mate in 3?", etc.)
      const MEDIATYPE = [OP_CODE, outcome]

      log('MEDIATYPE:', MEDIATYPE)

      // ideally the 0th item of the array would only be a string, so ignore
      // that.
      //
      // [
      //   0: Array [ "=" ]
      //   1: "3+3"
      // ]
      //
      // we would pass something like a payload of of the atoms of the above
      // structure: some 3s, an Equals and a Plus. it really doesn't matter
      // what the structure is here but what is important is that we're sending
      // a "message", we're "message-passing"[ovm]. fundamentally, the client
      // would be committed to a rational not unlike what we find in the "bitcoin"
      // concept, except that it's "harder," as it were: every request is
      // committed to "running the same code" (between client and server, or in a
      // peerless scenario). you and i know what "+" is. you and i know what "=" means.
      // but our knowledge does not guarantee faithful transmission, where here
      // we must employ rules to a specificity relevant to a logic ready-at-hand.
      // in truth, the client could send much more than "+" and some numbers.
      // the hypermedia-orientation invites us to orient a non-metacomputational
      // surface by which the client and server (or peers) establish medium
      // specificity. some might think that "epistemology as epistemic justification"
      // is just a round about way of getting back at zero-knowledge proofs.
      // what we are seeking here is a way for joint epistemic sponteneity
      // to inform a relevance logic based on deep semantic hashing. from the 
      // client's perspective, it sends a language and the participating server
      // may come up with its own sense for what "+" means but it is not based
      // on any "mental" history (nor cookies nor anything else) of the client,
      // but based on an insufficiency of the computational to review past
      // data of prior metacomputational actuality to clone presentations for
      // the purposes of entropic memory, where real representations and imaginary ones
      // cohere to coterminous dimensional spaces. a general idea here is that
      // the payload may be dressed as-if any other node might parse its request,
      // but it is important that the language given for the request is treated
      // as evolving. the "+" and the "=" in this case would not mere be enshrouded
      // in encryption nor embezzled through some steganography technique. rather,
      // the payload would itself be "living." its very terms would come with
      // meaning about them: what may look like static data, would in truth be
      // a knot homotopy whose link depends on an appropriate metacomputational
      // affinity between peerless agencies capable of performing cuts to
      // enable recognition of the meaning of definition immanent to the living
      // payload. a server could very well consider "3+3" to be a well-formed
      // bit of data to operate on. it might think "=" is no sweat. however,
      // the payload may be ciphered to transformations of evolutionary
      // periodization such that relation operators co-determine the ingress
      // through which non-metacomputational selection aggregates to learnable
      // compute (i.e., cloning; or, non-autorepresentational computational
      // immediacy; hyperparallelism from formal formlessness, etc.).
      //
      // [ovm]: https://mamund.site44.com/articles/objects-v-messages/index.html

      STORE.push(MEDIATYPE)
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
        break
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
        itemScope
        itemType='https://schema.org/WebChord'
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
