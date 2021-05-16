import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "store/authProvider";
import styles from "./Login.module.scss";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [incorrect, setIsIncorrect] = useState(false);
  let history = useHistory();
  const { usersData, setCurrentUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = usersData.find(
      (x) => x.password === password && x.email === email
    );
    if (user) {
      setIsIncorrect(false);
      setCurrentUser(user);
      if (user.role === "admin") {
        history.push("/sign-up/");
      } else {
        history.push("/records/");
      }
    } else {
      setIsIncorrect(true);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={styles["login-page"]}>
      <form>
        <h3>Авторизація</h3>
        <input
          type="email"
          value={email}
          className={styles.email}
          placeholder="Введіть email"
          onChange={(e) => handleChangeEmail(e)}
        />
        <input
          type="password"
          value={password}
          className={styles.password}
          placeholder="Введіть пароль"
          onChange={(e) => handleChangePassword(e)}
        />

        <div className={styles["custom-control-custom-checkbox"]}>
          <input
            type="checkbox"
            className={styles["custom-control-input"]}
            id="customCheck1"
          />
          <label
            className={styles["custom-control-label"]}
            htmlFor="customCheck1"
          >
            Запам'ятати мене
          </label>
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Увійти
        </button>
        {incorrect === true && (
          <p className={styles["error-message"]}>
            Пароль або email введені некоректно!
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
