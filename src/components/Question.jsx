import React, { Component } from 'react'

class Question extends Component {
  render () {
    return (
      <div class="ui form">
        <div class="grouped fields">
          <label for="question">{this.props.question.question}</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="selection" tabindex="0" class="hidden" />
              <label>{this.props.question.one}</label>
            </div>
          </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="selection" tabindex="0" class="hidden" />
              <label>{this.props.question.two}</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="selection" tabindex="0" class="hidden" />
              <label>{this.props.question.three}</label>
            </div>
          </div>
        </div>
    )
  }
}

export default Question
