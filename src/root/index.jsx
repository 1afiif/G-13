import React from 'react'
import Controlled from '../components/Controlled'
import Uncontrolled from '../components/Uncontrolled'

const Root = () => {
  return (
      <div style={{display:'flex'}}>
      <Controlled />
      <Uncontrolled/>
      </div>
  )
}

export default Root