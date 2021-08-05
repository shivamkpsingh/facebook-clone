import React from "react";
import "./Login.css";
import "./SignUpModel.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import auth from "./firebase";
const useStyles = makeStyles(() => ({
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
  const [firstName, setFirstName] = useState("");
  const [surname, setSurnamename] = useState("");
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState();

  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        authUser.user
          .sendEmailVerification()
          .then(() => {
            alert("An verification email sent to your email");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });

    setOpen(false);
  };
  const logIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        const user = authUser.user.emailVerified;
        // console.log(user.emailVerified);
        const Newuser = authUser.user;
        console.log(Newuser);

        if (user) {
          console.log("yes email verified");
        } else {
          alert("email not verified");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setPassword("");
  };

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
              autoComplete="on"
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
            className={classes.modal}
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
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
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="name"
                        placeholder="First name"
                      />
                      <input
                        value={surname}
                        onChange={(e) => setSurnamename(e.target.value)}
                        type="name"
                        placeholder="Surname"
                      />
                    </div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Mobile number or email address"
                    />
                    <input
                      value={password}
                      autoComplete="on"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="New password"
                    />
                    <button onClick={SignUp} type="submit">
                      Sign Up
                    </button>
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
