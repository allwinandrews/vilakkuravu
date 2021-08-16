import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import AuthContext from "../../../hooks-store/auth-context";
import SignInImage from "../../../assets/images/signin-image.jpg";
import classes from "../Authentication.module.css";

export default function SignIn() {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isEmailValid: true,
  });
  const [IsLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState((prevState) => {
      const newLoginState = { ...prevState, [name]: value };

      return newLoginState;
    });
  };

  const handleEmailValidation = (event) => {
    const { value } = event.target;

    const emailReg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const isEmailValid = emailReg.test(value);

    setLoginState((prevState) => {
      const newLoginState = { ...prevState, isEmailValid };

      return newLoginState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const google_key = "AIzaSyANl0MA_PV5lo0s_zlDliTFs5I5X6HZyEg";
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      google_key;

    const { email, password } = loginState;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const isSignInButtonDisabled = loginState.isEmailValid && loginState.password;

  return (
    <section className={classes["sign-in"]}>
      <div className={classes.container}>
        <div className={classes["signin-content"]}>
          <div className={classes["signin-image"]}>
            <figure>
              <img src={SignInImage} alt="sing up image" />
            </figure>
            <Link to="/sign-up" className={classes["signup-image-link"]}>
              Create an account
            </Link>
          </div>

          <div className={classes["signin-form"]}>
            <h2 className={classes["form-title"]}>Sign In</h2>
            <form className={classes["register-form"]} onSubmit={submitHandler}>
              <div className={classes["form-group"]}>
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  onBlur={handleEmailValidation}
                />
              </div>
              {!loginState.isEmailValid && <p>Enter a Valid Email</p>}
              <div className={classes["form-group"]}>
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              {/* <div className={classes["form-group"]}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label
                  htmlFor="remember-me"
                  className={classes["label-agree-term"]}
                >
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div> */}
              <div className="form-group form-button">
                {!IsLoading && (
                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    className={
                      isSignInButtonDisabled
                        ? classes["form-submit"]
                        : classes["error-button"]
                    }
                    disabled={isSignInButtonDisabled}
                  >
                    Sign In
                  </button>
                )}
                {IsLoading && <p>Sending Request...</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
