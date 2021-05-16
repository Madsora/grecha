import {
  UserFieldToLabel,
  RecordSearchField,
  UserObligatoryField,
} from "models";
import React from "react";
import { Button, Modal } from "react-bootstrap";

import styles from "./styles.module.scss";

const SearchModal = ({ onHide, isShow, filters, setFilters }) => {
  const changeFormStateFromDate = (e) => {
    const { name, valueAsDate } = e.target;
    setFilters({
      ...filters,
      [name]: valueAsDate,
    });
  };

  const changeFormState = (e) => {
    const { name, value } = e.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const createTextInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <input
        type="text"
        name={fieldname}
        id={fieldname}
        value={filters[fieldname] ?? ""}
        onChange={changeFormState}
      />
    </div>
  );

  const createDateInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <input
        type="date"
        name={fieldname}
        id={fieldname}
        value={filters[fieldname]?.toISOString().substring(0, 10) ?? ""}
        onChange={changeFormStateFromDate}
      />
    </div>
  );

  return (
    <Modal
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isShow}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Фільтри для пошуку
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.wrapper}>
        {createTextInput(UserObligatoryField.fullName)}
        {createTextInput(UserObligatoryField.taxNumber)}
        {createDateInput(UserObligatoryField.dateOfBirth)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрити</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
