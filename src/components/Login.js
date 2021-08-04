import React from "react";
import "./Login.css";
import "./SignUpModel.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 430,
    height: 350,
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.18)",
  },
}));
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  // const [user, setUser] = useState();

  const logIn = () => {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="login">
      <form action="">
        <div className="login__container">
          <div className="login__input">
            <input
              value={email}
              type="email"
              placeholder="Email address or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={logIn}>
              Log In
            </button>
            <a href="#forgot">forgotten password?</a>
          </div>

          <button type="button" onClick={handleOpen}>
            create new account
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className="signUP__header">
                  <div className="signUP__headerLeft">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy</p>
                  </div>
                  <ClearIcon />
                </div>
                <form action="">
                  <div className="signUP__input">
                    <div className="signUP__InputName">
                      <input type="text" placeholder="First name" />
                      <input type="text" placeholder="Surname" />
                    </div>
                    <input
                      type="text"
                      placeholder="Mobile number or email address"
                    />
                    <input type="text" placeholder="New password" />
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default Login;
