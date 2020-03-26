import React from 'react'
import Friend from './Friend'

const FriendsList = ({ friends }) => {
  console.log(friends)
  return (
    <div>
      {friends.map(ele => <Friend key={ele.id} friend={ele} /> )}
    </div>
  )
}

export default FriendsList
