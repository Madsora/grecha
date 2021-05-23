/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import styles from "./Register.module.scss";
import { toast, ToastContainer } from "react-toastify";
import { useAuthContext } from "store/authProvider";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const UserFieldToLabel = {
  name: "ФІО Реєстратора",
  date: "Дата народження",
  code: "Ідентифікаційний код",
  series: "Серія паспорта",
  passportNumber: "Номер паспорта",
  email: "Email",
  address: "Адреса реєстратора",
  password: "Пароль",
};
const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    date: null,
    code: "",
    series: "",
    passportNumber: "",
    email: "",
    address: "",
    password: "",
  });
  const { addUser } = useAuthContext();
  const [isShowError, setShowError] = useState(false);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const changeFormState = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const changeFormStateFromDate = (e) => {
    const { name, valueAsDate } = e.target;
    setFormState({
      ...formState,
      [name]: valueAsDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(formState).some((key) => {
        return !!isValid(key, formState[key]);
      })
    ) {
      setShowError(true);
      return;
    }

    toast.success("Створено нового реєстратора!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      closeButton: false,
    });
    addUser(formState);
  };

  const isValid = (fieldname, value) => {
    let errMessage = "";
    if (!value) {
      errMessage = `Це поле обов'язкове`;
    } else {
      switch (fieldname) {
        case "name":
          {
            if (value.length < 6 || !value.includes(" ")) {
              errMessage = `Має містити ім'я та прізвище`;
            } else {
              return null;
            }
          }
          break;
        case "date":
          return null;
          break;
        case "code":
          {
            if (value.length !== 10) {
              errMessage = `Ідентифікаційний код має містити 10 символів`;
            } else {
              return null;
            }
          }
          break;
        case "series":
          return null;
          break;
        case "passportNumber":
          {
            if (value.length < 9) {
              errMessage = `Номер паспорту має містити 9 символів`;
            } else {
              return null;
            }
          }
          break;
        case "email":
          {
            const re =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!re.test(value)) {
              errMessage = `Не відповідає формату E-mail`;
            } else {
              return null;
            }
          }
          break;
        case "password":
        case "address":
          {
            if (!value.length) {
              errMessage = `Це поле обов'язкове`;
            } else {
              return null;
            }
          }
          break;
        default:
          errMessage = `Це поле обов'язкове`;
      }
    }

    return <span className={styles.errorLabel}>{errMessage}</span>;
  };

  const renderFields = () =>
    Object.keys(formState).map((fieldName) => {
      const isDateInput = fieldName === "date";

      if (isDateInput) return createDateInput(fieldName);

      return createTextInput(fieldName);
    });

  const createTextInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <input
        type="text"
        name={fieldname}
        id={fieldname}
        value={formState[fieldname] ?? ""}
        onChange={changeFormState}
      />
      {isShowError && isValid(fieldname, formState[fieldname])}
    </div>
  );

  const createDateInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <input
        type="date"
        max={`${maxDate.getFullYear()}-0${
          maxDate.getMonth() + 1
        }-${maxDate.getDate()}`}
        name={fieldname}
        id={fieldname}
        value={formState[fieldname]?.toISOString().substring(0, 10) ?? ""}
        onChange={changeFormStateFromDate}
      />
      {isShowError &&
        !formState[fieldname]?.toISOString().substring(0, 10) &&
        isValid(fieldname, formState[fieldname])}
    </div>
  );

  return (
    <div className={styles["form-page-wrapper"]}>
      <form>
        <h3>Реєстрація Реєстратора</h3>
        {renderFields()}
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary btn-block"
        >
          Зареєструвати
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;
