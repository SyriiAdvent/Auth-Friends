import React from 'react'

const Friend = ({ friend: { name, age, email } }) => {
  return (
    <div>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <h5>{email}</h5>
    </div>
  )
}

export default Friend
