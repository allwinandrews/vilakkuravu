import React from "react";
import { Link } from "react-router-dom";

import classes from "../Authentication.module.css";
import SignInImage from "../../../assets/images/signin-image.jpg";

export default function SignIn() {
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
            <form
              method="POST"
              className={classes["register-form"]}
              id="login-form"
            >
              <div className={classes["form-group"]}>
                <label for="your_name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Name"
                />
              </div>
              <div className={classes["form-group"]}>
                <label for="your_pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
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
                  for="remember-me"
                  className={classes["label-agree-term"]}
                >
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div> */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className={classes["form-submit"]}
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
