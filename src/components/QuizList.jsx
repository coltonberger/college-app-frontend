import React from 'react'
import Question from './Question'
import '../App.css'

const QuizList = props => {
  //console.log("Question props -->", props)

  return <div>
    <div>
      <h2 class="ui icon center aligned header">
        <img src= {require ("../data/images/daytripperLogo2.jpeg")} class="ui large centered image" alt="daytripper"/>
        <div class="title">
          What college should you go to?
        </div>
      </h2>

    </div>

    <div>
    {props.questionList.map(question =>
         <Question
        key={question.id}
        question={question}
      />
    )}
    </div>

    <div className="ui container center aligned">
      <button class="ui primary button">View Suggested Schools</button>
    </div>
  </div>
  }

export default QuizList
