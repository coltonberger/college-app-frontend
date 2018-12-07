import React, { Component } from 'react'
import './App.css'
import Question from './components/Question'
import schoolData from './data/schoolData'
//import questions from './data/questions'
import SchoolList from './components/SchoolList'

let schools = schoolData
console.log(schools)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    this.setState ({
      schools: schools
    })
  }

  render () {
    return (
      <div className='App'>
      <Question />
      <SchoolList
        schools={this.state.schools}
      />
      </div>
    )
  }
}

export default App
