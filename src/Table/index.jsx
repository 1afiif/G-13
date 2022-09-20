import React from 'react'

class Table extends React.Component {
    render() {
        console.log(this.props)
        console.log(this.props.children)
        return (
    
            <div>Table</div>
        )
    }
}
export default Table