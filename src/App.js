import React, { Component } from 'react'
import './App.css'
import QuizList from './components/QuizList'
import schoolData from './data/schoolData'
import questions from './data/questions'
//import SchoolList from './components/SchoolList'

let schools = schoolData
let questionList = questions

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      schools: [],
      questionList: [],
      quizSelections: []
    }
  }

  componentDidMount() {
    this.setState ({
      schools: schools,
      questionList: questionList,
      step: 0
    })
  }


  render () {
    return (
      <div className='App'>
      <QuizList
        questionList={questionList}
      />
      </div>
    )
  }
}

export default App
