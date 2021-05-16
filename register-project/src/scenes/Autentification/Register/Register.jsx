import React, { useState } from "react";
import styles from "./Register.module.scss";

import { addUser } from "store/data";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const [series, setSeries] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  let history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };

  const handleChangeSeries = (e) => {
    setSeries(e.target.value);
  };

  const handleChangePassportNumber = (e) => {
    setPassportNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      name,
      date,
      code,
      series,
      passportNumber,
      email,
      password,
      address,
    });
    history.push("/sign-in");
  };

  return (
    <div className={styles["form-page-wrapper"]}>
      <form>
        <h3>Реєстрація</h3>

        <input
          type="text"
          className={styles["form-control"]}
          value={name}
          placeholder="ФІО Реєстратора"
          onChange={(e) => handleChangeName(e)}
        />
        <input
          type="date"
          className={styles["form-control"]}
          value={date}
          placeholder="Дата народження"
          onChange={(e) => handleChangeDate(e)}
        />
        <input
          type="number"
          className={styles["form-control"]}
          value={code}
          placeholder="Ідентифікаційний код"
          onChange={(e) => handleChangeCode(e)}
        />
        <input
          type="text"
          className={styles["form-control"]}
          value={series}
          placeholder="Серія паспорта"
          onChange={(e) => handleChangeSeries(e)}
        />
        <input
          type="number"
          className={styles["form-control"]}
          value={passportNumber}
          placeholder="Номер паспорта"
          onChange={(e) => handleChangePassportNumber(e)}
        />
        <input
          type="email"
          className={styles["form-control"]}
          value={email}
          placeholder="Email"
          onChange={(e) => handleChangeEmail(e)}
        />
        <input
          type="password"
          className={styles["form-control"]}
          value={password}
          placeholder="Пароль"
          onChange={(e) => handleChangePassword(e)}
        />
        <input
          type="text"
          className={styles["form-control"]}
          value={address}
          placeholder="Адреса реєстратора"
          onChange={(e) => handleChangeAddress(e)}
        />

        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary btn-block"
        >
          Зареєструвати
        </button>
      </form>
    </div>
  );
};

export default Register;
