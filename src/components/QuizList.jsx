import React from 'react'
import Question from './Question'

const QuizList = props => {
  //console.log("Question props -->", props)

  return <div>
    {props.questionList.map(question =>
         <Question
        key={question.id}
        question={question}
      />
    )}

    <div>
    <button>
      <a href='/schools'> View Suggested Schools</a>
    </button>
    </div>
  </div>
  }

export default QuizList
