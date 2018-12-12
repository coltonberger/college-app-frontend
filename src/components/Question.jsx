import React, { Component } from 'react'
import '../App.css'

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: {}
    }
  }
  componentDidMount(){
    console.log("question props", this.props.question)
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
      <div className="questionForm">
        <label className="question" for="question">{this.props.question.question}</label>
        <div className="ui radio">
          <label>
            {this.props.question.anwsers.map((answer,index, img) =>
             <div className="content">
                <img src={this.props.question.id} alt="images" />
                <div className="wrap">
                  <input type="checkbox" id={"answer"+index} name="answer"
                  onClick={()=> this.onCheck(this.props.question.id, answer.type)}
                  value={answer.type}
                  checked={this.state.answers[this.props.question.id + answer.type]}
                  />
                  <label for={"answer"+index}>{answer.content}</label>
                </div>
            </div>)}
          </label>
        </div>
      </div>
    )
  }
}

export default Question
