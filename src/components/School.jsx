import React, { Component } from 'react'

class School extends Component {
  render () {
    //console.log("school props", this.props)
    return (
      <div className='school'>
        <a href={this.props.school.link} target="_blank" className="ui medium image">
          <img src="./images/wireframe/image-text.png" />
        </a>
        <h6>{this.props.school.schoolName}</h6>
      </div>
    )
  }
}

export default School
