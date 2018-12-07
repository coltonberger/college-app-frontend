import React from 'react'
import Question from './Question'

const QuizList = props => {
  return props.questions.map(question =>
      <Question
        key={question.id}
        question={question}
      />
    )
  }

export default QuizList
