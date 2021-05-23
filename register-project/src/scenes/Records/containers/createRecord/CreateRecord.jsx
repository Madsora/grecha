import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  RecordType,
  UserField,
  UserFieldToLabel,
  UserObligatoryField,
  UserOptionalField,
} from "models";
import { useRecordsContext } from "store/recordsProvider";
import { INITIAL_STATE } from "./common";
import styles from "./styles.module.scss";
import { Button } from "react-bootstrap";

const CreateRecord = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [isShowError, setShowError] = useState(false);
  const history = useHistory();
  const { recordsData } = useRecordsContext();

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
    const areEmptyFields = Object.values(UserObligatoryField).some(
      (obligatoryField) => {
        console.log(obligatoryField);
        console.log(isValid(obligatoryField, formState[obligatoryField]));
        return (
          isValid(obligatoryField, formState[obligatoryField]) &&
          obligatoryField !== UserObligatoryField.id
        );
      }
    );

    console.log(areEmptyFields);
    if (areEmptyFields) {
      setShowError(true);
      return;
    }
    let leastId = 0;
    recordsData.forEach((record) => (leastId = Math.max(leastId, record.id)));

    recordsData.push({
      ...formState,
      id: leastId + 1,
    });

    history.push(`/records`);
  };

  // const errorLabel = () => (
  //   <span className={styles.errorLabel}>Це поле обов'язкове</span>
  // );

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
      {isShowError &&
        Object.values(UserObligatoryField).includes(fieldname) &&
        isValid(fieldname, formState[fieldname])}
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
        value={formState[fieldname]?.toISOString().substring(0, 10) ?? ""}
        onChange={changeFormStateFromDate}
      />
      {isShowError &&
        !formState[fieldname]?.toISOString().substring(0, 10) &&
        Object.values(UserObligatoryField).includes(fieldname) &&
        isValid(fieldname, formState[fieldname])}
    </div>
  );

  const createRecordTypeInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <select
        name={fieldname}
        id={fieldname}
        value={formState[fieldname]}
        onChange={changeFormState}
      >
        {Object.values(RecordType).map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );

  const renderFields = (useOptional = false) =>
    Object.keys(useOptional ? UserOptionalField : UserObligatoryField).map(
      (fieldName) => {
        const isDateInput =
          fieldName === UserField.dateOfBirth ||
          fieldName === UserField.dateOfCertifying;

        const isMultiSelectOption = fieldName === UserField.recordType;

        const shouldIgnoreCertifiedByField =
          fieldName === UserField.certifiedBy &&
          !(
            formState.recordType === RecordType.COUPLE_AGREEMENT ||
            formState.recordType === RecordType.AGREEMENT
          );
        const shouldIgnoreId = fieldName === UserField.id;

        const shouldIgnoreInput =
          fieldName === UserField.placeOfBirth ||
          shouldIgnoreCertifiedByField ||
          shouldIgnoreId;

        if (shouldIgnoreInput) return null;
        if (isDateInput) return createDateInput(fieldName);
        if (isMultiSelectOption) return createRecordTypeInput(fieldName);

        return createTextInput(fieldName);
      }
    );

  const isValid = (fieldname, value) => {
    let errMessage = "";
    if (!value) {
      errMessage = `Це поле обов'язкове`;
    } else {
      switch (fieldname) {
        case UserObligatoryField.fullName:
          {
            if (value.length < 6 || !value.includes(" ")) {
              errMessage = `Має містити ім'я та прізвище`;
            } else {
              return null;
            }
          }
          break;
        case UserObligatoryField.dateOfCertifying:
        case UserObligatoryField.dateOfBirth:
        case UserObligatoryField.recordType:
          return null;
          break;
        case UserObligatoryField.taxNumber:
          {
            if (value.length !== 10) {
              errMessage = `Ідентифікаційний код має містити 10 символів`;
            } else {
              return null;
            }
          }
          break;
        case UserObligatoryField.placeOfCertifying:
        case UserObligatoryField.placeOfLiving:
        case UserObligatoryField.placeOfStorage:
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

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <h2 className={styles.centred}>Створення запису</h2>
      <h4 className={`${styles.centred} ${styles.subHeader}`}>
        Обов'язкові поля
      </h4>
      {renderFields()}
      <h4 className={`${styles.centred} ${styles.subHeader}`}>
        Додаткові поля
      </h4>
      {renderFields(true)}

      <Button variant="primary" className={styles.button} type="submit">
        Створити
      </Button>
      {/* <button type="submit" className={styles.button}>
        Створити
      </button> */}
    </form>
  );
};

export default CreateRecord;
