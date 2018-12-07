import React, { Component } from 'react'

class School extends Component {
  render () {
    console.log("school props", this.props)
    return (
      <div className='school'>
      <h2>{this.props.school.schoolName}</h2>
      <h2>{this.props.school.size}</h2>
      </div>
    )
  }
}

export default School
