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
            {this.props.question.anwsers.map(({id, type, content, img}) => {
             return (<div className="content" key={id}>
                <img src={img} alt="images" ></img>
                <div className="wrap">
                  <input type="checkbox" id={"answer"+id} name="answer"
                  onClick={()=> this.onCheck(this.props.question.id, type)}
                  value={type}
                  checked={this.state.answers[this.props.question.id + type]}
                  />
                  <label for={"answer"+id}>{content}</label>
                </div>
            </div>)})}
          </label>
        </div>
      </div>
    )
  }
}

export default Question
