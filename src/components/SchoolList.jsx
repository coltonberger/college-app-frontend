import React from 'react'
import School from './School'

const SchoolList = props => {
  console.log("props", props)
  return props.schools.map(school =>
      <School
        key={school.id}
        school={school}
      />
    )
  }

export default SchoolList
