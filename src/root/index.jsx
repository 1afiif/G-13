import React from 'react'
import Context from '../context'
import UseReducer from '../UseReducer'
import UseState from '../UseState'

const Root = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Context>
        <UseReducer />
        <UseState />
      </Context>
    </div>
  );
}

export default Root