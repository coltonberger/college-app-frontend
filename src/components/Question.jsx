import React, { Component } from 'react'
//import { Button } from 'semantic-ui-react'

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: {}
    }
  }
  componentDidMount(){
    console.log(this.props.question)
  }
  onCheck(id,type,checked){
    console.log(id,type)
    let newAnswers = {...this.state.answers}
    newAnswers[id+type] = !newAnswers[id+type];
    this.setState({answers : newAnswers});
    //database call to save the checked
  }
  render () {
    return (
      <div className="question form">
        <label for="question">{this.props.question.question}</label>
        <div className="ui radio checkbox">
          <label>
            {this.props.question.anwsers && this.props.question.anwsers.length ? this.props.question.anwsers
             .map( (answer,index) =>
             <div className="content">
                <input type="checkbox" id={"answer"+index} name="answer"
                onClick={()=> this.onCheck(this.props.question.id, answer.type)}
                value={answer.type}
                checked={this.state.answers[this.props.question.id + answer.type]}
                />
                <label for={"answer"+index}>{answer.content}</label>
            </div>) : null}
          </label>
        </div>
      </div>
    )
  }
}

export default Question
