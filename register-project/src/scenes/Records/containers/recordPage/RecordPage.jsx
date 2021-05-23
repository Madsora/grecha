import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import {
  UserFieldToLabel,
  UserField,
  UserObligatoryField,
  UserOptionalField,
  RecordType,
} from "models";
import { RecordField } from "../../components";
import { useRecordsContext } from "store/recordsProvider";
import styles from "./styles.module.scss";
import { Button } from "react-bootstrap";

const MOCK_LOADING_TIME = 1000;

const RecordPage = () => {
  const { id } = useParams();
  let history = useHistory();
  const { recordsData } = useRecordsContext();
  const record = recordsData[id];

  const [isLoading, setLoading] = useState(false);
  const [tmpState, setTmpState] = useState(record);
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [isShowError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, MOCK_LOADING_TIME);

    return () => clearTimeout(timer);
  });

  if (isLoading) {
    // TODO add loader
    return null;
  }

  if (!record) {
    // TODO redirect to 404
    return "no record by such index";
  }

  const changeTmpState = (e) => {
    const { name, value } = e.target;

    setTmpState({
      ...tmpState,
      [name]: value,
    });
  };

  const changeTmpStateFromDate = (e) => {
    const { name, valueAsDate } = e.target;
    setTmpState({
      ...tmpState,
      [name]: valueAsDate,
    });
  };

  const handleSubmit = () => {
    const areEmptyFields = Object.values(UserObligatoryField).some(
      (obligatoryField) =>
        isValid(obligatoryField, tmpState[obligatoryField]) &&
        obligatoryField !== UserObligatoryField.id
    );

    if (areEmptyFields) {
      setShowError(true);
      return;
    }

    recordsData[tmpState.id] = tmpState;
    setUpdateMode(false);
  };

  const renderField = (fieldName) => {
    let value = record[fieldName];

    const isDateValue =
      fieldName === UserField.dateOfBirth ||
      fieldName === UserField.dateOfCertifying ||
      fieldName === UserField.dateOfCertifying;

    const shouldHideBirthCountry =
      fieldName === UserField.placeOfBirth && record[UserField.placeOfBirth];

    const shouldHideCertifier =
      fieldName === UserField.certifiedBy &&
      (record[UserField.recordType] !== RecordType.AGREEMENT ||
        record[UserField.recordType] !== RecordType.COUPLE_AGREEMENT);

    const shouldIgnoreId = fieldName === UserField.id;

    const shouldHideField =
      shouldHideBirthCountry ||
      shouldHideCertifier ||
      !record[fieldName] ||
      shouldIgnoreId;

    if (isDateValue) {
      value = record[fieldName]?.toLocaleDateString();
    }

    if (shouldHideField) {
      return null;
    }

    return (
      <RecordField
        key={fieldName}
        label={UserFieldToLabel[fieldName]}
        value={value}
      />
    );
  };

  const renderObligatoryFields = () =>
    Object.values(UserObligatoryField).map((obligatoryFieldName) =>
      isUpdateMode
        ? renderInput(obligatoryFieldName)
        : renderField(obligatoryFieldName)
    );

  const renderOptionalFields = () =>
    Object.values(UserOptionalField).map((optionalFieldName) =>
      isUpdateMode
        ? renderInput(optionalFieldName)
        : renderField(optionalFieldName)
    );

  const createTextInput = (fieldname) => (
    <div className={styles.inputWrapper} key={fieldname}>
      <label className={styles.label} htmlFor={fieldname}>
        {UserFieldToLabel[fieldname]}:
      </label>
      <input
        type="text"
        name={fieldname}
        id={fieldname}
        value={tmpState[fieldname] ?? ""}
        onChange={changeTmpState}
      />
      {isShowError &&
        Object.values(UserObligatoryField).includes(fieldname) &&
        isValid(fieldname, tmpState[fieldname])}
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
        value={tmpState[fieldname]?.toISOString().substring(0, 10) ?? ""}
        onChange={changeTmpStateFromDate}
      />
      {isShowError &&
        !tmpState[fieldname]?.toISOString().substring(0, 10) &&
        Object.values(UserObligatoryField).includes(fieldname) &&
        isValid(fieldname, tmpState[fieldname])}
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
        value={tmpState[fieldname]}
        onChange={changeTmpState}
      >
        {Object.values(RecordType).map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );

  const renderInput = (fieldName) => {
    const isDateInput =
      fieldName === UserField.dateOfBirth ||
      fieldName === UserField.dateOfCertifying;

    const isMultiSelectOption = fieldName === UserField.recordType;

    const shouldIgnoreCertifiedByField =
      fieldName === UserField.certifiedBy &&
      !(
        tmpState.recordType === RecordType.COUPLE_AGREEMENT ||
        tmpState.recordType === RecordType.AGREEMENT
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
  };

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
    <div className={styles.pageContent}>
      <h2 className={styles.recordHeader}>Основні відомості</h2>
      {renderObligatoryFields()}
      <h2 className={styles.recordHeader}>Додаткові відомості</h2>
      {renderOptionalFields()}

      <div className={styles.buttonsWrapper}>
        {isUpdateMode ? (
          <>
            <Button variant="secondary" onClick={() => setUpdateMode(false)}>
              Скасувати
            </Button>

            <Button variant="success" onClick={() => handleSubmit()}>
              Зберегти
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => setUpdateMode(true)}>
              Змінити дані
            </Button>

            <Button
              variant="secondary"
              onClick={() => history.push("/records/")}
            >
              Назад
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecordPage;
