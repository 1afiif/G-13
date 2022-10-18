import React,{memo} from 'react'

const Child = (props) => {
    console.log('Child');
  return (
    <div>
          <h2>Child</h2>
          <h4>{props.name('from Child').name}</h4>
    </div>
  )
}

export default memo(Child)
