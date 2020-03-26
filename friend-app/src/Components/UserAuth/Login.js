import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
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

const Login = () => {
  const classes = useStyles();
  const history = useHistory()
  const [userinfo, setUserinfo] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/login', userinfo)
      .then(res => {
        console.log(res)
        localStorage.setItem('authkey', JSON.stringify(res.data.payload))
        history.push('/dashboard')
      })
      .catch(err => console.log(`Error at login attempt`, err))
  }

  const handleChange = e => {
    setUserinfo({
      ...userinfo,
      [e.target.name]: e.target.value
    })
  }

  // const handlePasswordVisible = () => {
  //   setUserinfo({
  //     ...userinfo,
  //     showPassword: !userinfo.showPassword
  //   })
  // }

  return (
    <div className={classes.root}>
        <form>
      <div className={classes.loginBox}>
          <TextField name='username' label="Username" variant='outlined' value={userinfo.name} onChange={handleChange} />
          <br />
          <TextField name='password' label="Password" variant='outlined' value={userinfo.password} onChange={handleChange} />
          <br />
          <Button variant='contained' onClick={handleSubmit}>Login</Button>
      </div>
        </form>
    </div>
  );
};

export default Login;
