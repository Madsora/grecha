import React, { useState } from "react";
import styles from "./Register.module.scss";

const Register = () => {
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');


    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     this.props.history.push('/');
    // }

    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handleChangePassword = (e) => {
    //     setPassword(e.target.value)
    // }
  return (
    <div className={styles["login-page"]}>
      <form>
        <h3>Sign Up</h3>
        {/* <input
          type="email"
          value={email}
          className={styles.email}
          placeholder="Enter email"
          onChange={(e) => handleChangeEmail(e)}
        />
        <input
          type="password"
          value={password}
          className={styles.password}
          placeholder="Enter password"
          onChange={(e) => handleChangePassword(e)}
        />

        <div className={styles["custom-control-custom-checkbox"]}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>

        <div className={styles["to-sign-up"]}>
          <p className="create-account-text-left">
            Don't have an <Link to="/sign-up">account?</Link>
          </p>
          <p className="forgot-password-text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default Register;