import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px black",
    borderRadius: 3,
    padding: "3rem 5rem",
    "& div": {
      marginBottom: 12
    }
  }
}));

const AddFriend = (props) => {
  const classes = useStyles();
  const history = useHistory()
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(res => {
        console.log(res.data)
        props.add.updateFriends(res.data)
      })
      .catch(err => console.log(`Error at login attempt`, err))
  }

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={classes.root}>
        <form>
      <div className={classes.loginBox}>
          <TextField name='name' label="Name" variant='outlined' value={newFriend.name} onChange={handleChange} />
          <TextField name='age' label="Age" variant='outlined' value={newFriend.password} onChange={handleChange} />
          <TextField name='height' label="Height" variant='outlined' value={newFriend.password} onChange={handleChange} />
          <br />
          <Button variant='contained' onClick={handleSubmit}>Add</Button>
      </div>
        </form>
    </div>
  );
};

export default AddFriend;
