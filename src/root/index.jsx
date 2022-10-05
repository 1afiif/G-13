import React from 'react'
import ClassComponent from '../components/ClassComponent'
import FunctionalComponent from '../components/FunctionalComponent'

const Root = () => {
  return (
      <div style={{display:'flex',gap:'24em'}}>
          <ClassComponent title={'Class'} />
          <FunctionalComponent title={'Functional'} />
      </div>
  )
}

export default Root