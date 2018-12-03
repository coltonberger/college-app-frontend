import React from 'react'
import PropTypes from 'prop-types'

function AnswerOption(props) {
  return (
    <li className='anwserOption'>
      <input
        type='radio'
        className='radioCustomButton'
        name='radioGroup'
        checked={props.answerType === props.anwser}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answerType}
        onChange={props.onAnswerSelected}
      />
      <label className='radioCustomLavel' htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  )
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  anwserContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption
