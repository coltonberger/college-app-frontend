import React from 'react'
import Question from './Question'

const QuizList = props => {
  console.log("Question props -->", props)

  return props.questionList.map(question =>
      <Question
        key={question.id}
        question={question}
      />
    )
  }

export default QuizList
