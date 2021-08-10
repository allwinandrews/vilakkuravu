import React from "react";
import { Link } from "react-router-dom";

import classes from "./index.module.css";
import SignUpImage from "../../../assets/images/signup-image.jpg";

export default function SignUp() {
  return (
    <section className={classes.signup}>
      <div className={classes.container}>
        <div className={classes["signup-content"]}>
          <div className={classes["signup-form"]}>
            <h2 className={classes["form-title"]}>Sign up</h2>
            <form
              method="POST"
              className={classes["register-form"]}
              id="register-form"
            >
              <div className="form-group">
                <label for="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className={classes["form-group"]}>
                <label for="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className={classes["form-group"]}>
                <label for="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>
              <div className={classes["form-group"]}>
                <label for="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div className={classes["form-group"]}>
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label for="agree-term" className={classes["label-agree-term"]}>
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in
                  <a href="#" className={classes["term-service"]}>
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className={classes["form-submit"]}
                  value="Register"
                />
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
