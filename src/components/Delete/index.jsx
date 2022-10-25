import React from 'react'

const Delete = () => {
 
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${localStorage.getItem('delete')}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
      }).then((response) => response.json())
        .then((response) => console.log(response));
    
  return (
    <div>
      <h3>Delete</h3>
    </div>
  )
}

export default Delete
