import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import AuthContext from "../../../hooks-store/auth-context";
import SignUpImage from "../../../assets/images/signup-image.jpg";
import SignUpPasswordInvalidList from "./SignUpPasswordInvalidList";
import classes from "../Authentication.module.css";

export default function SignUp() {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [IsLoading, setIsLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const passwordValidation = () => {
    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const isValid = reg.test(loginState.password);

    setIsPasswordValid(isValid);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState((prevState) => {
      const newLoginState = { ...prevState, [name]: value };

      return newLoginState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const google_key = "AIzaSyANl0MA_PV5lo0s_zlDliTFs5I5X6HZyEg";
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
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

  let isPasswordsSame = false;
  if (loginState.password !== loginState.confirmPassword)
    isPasswordsSame = true;

  return (
    <section className={classes["sign-up"]}>
      <div className={classes.container}>
        <div className={classes["signup-content"]}>
          <div className={classes["signup-form"]}>
            <h2 className={classes["form-title"]}>Sign up</h2>
            <form className={classes["register-form"]} onSubmit={submitHandler}>
              <div className={classes["form-group"]}>
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={passwordValidation}
                />
              </div>
              {!isPasswordValid && (
                <SignUpPasswordInvalidList className={classes["validation-list"]} />
              )}
              <div className={classes["form-group"]}>
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat your password"
                  onChange={handleChange}
                />
              </div>
              {isPasswordsSame && <p>Password Mismatch</p>}
              {/* <div className={classes["form-group"]}>
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className={classes["label-agree-term"]}>
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in
                  <a href="#" className={classes["term-service"]}>
                    Terms of service
                  </a>
                </label>
              </div> */}
              <div className="form-group form-button">
                {!IsLoading && (
                  <button
                    type="submit"
                    name="signup"
                    className={
                      !isPasswordsSame
                        ? classes["form-submit"]
                        : classes["error-button"]
                    }
                    disabled={isPasswordsSame}
                  >
                    Register
                  </button>
                )}
                {IsLoading && <p>Sending Request...</p>}
              </div>
            </form>
          </div>
          <div className={classes["signup-image"]}>
            <figure>
              <img src={SignUpImage} alt="sing up image" />
            </figure>
            <Link to="/sign-in" className={classes["signup-image-link"]}>
              I am already member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
