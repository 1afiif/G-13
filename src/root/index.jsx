import React from 'react'
import Delete from '../components/Delete'
import Edit from '../components/Edit'
// import Axios from '../components/Axios'
import Fetch from '../components/Fetch'
import Login from '../components/Login'
//2video 8minut 20October
const Root = () => {
  return (
    <>
      <Login />
      <Edit/>
      <Delete/>
      <Fetch />
      {/* <Axios/> */}
    </>
  )
}

export default Root
