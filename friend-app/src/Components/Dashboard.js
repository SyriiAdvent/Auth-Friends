import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import FriendsList from "./FriendsList";
import AddFriend from './AddFriend'
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory
  const [friends, setFriends] = useState([]);
  const [createFriend, setCreateFriend] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('authkey')) {
      axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err =>
        console.log(`Error retreiving friends from server...`, err)
      );
    } else {
      return history.push('/login')
    }
    
  }, [createFriend]);

  const handleAddFriend = () => {
    setCreateFriend(true)
    
  }

  const updateFriends = (data) => {
    setFriends(data)
  }

  return (
    <div>
      {createFriend ? <AddFriend add={updateFriends} /> : <button onClick={handleAddFriend}>Add Friend</button>}
      <FriendsList friends={friends} />
    </div>
  );
};

export default Dashboard;
