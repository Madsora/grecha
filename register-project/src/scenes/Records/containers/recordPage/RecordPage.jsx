import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  UserFieldToLabel,
  UserField,
  UserObligatoryField,
  UserOptionalField,
  RecordType,
} from "models";
import { recordsData } from "store/data";
import { RecordField } from "../../components";

import styles from "./styles.module.scss";

const MOCK_LOADING_TIME = 1000;

const RecordPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  const record = recordsData[id];

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

    const shouldHideField =
      shouldHideBirthCountry || shouldHideCertifier || !record[fieldName];

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
      renderField(obligatoryFieldName)
    );

  const renderOptionalFields = () =>
    Object.values(UserOptionalField).map((optionalFieldName) =>
      renderField(optionalFieldName)
    );

  return (
    <div className={styles.pageContent}>
      <h2 className={styles.recordHeader}>Основні відомості</h2>
      {renderObligatoryFields()}
      <h2 className={styles.recordHeader}>Додаткові відомості</h2>
      {renderOptionalFields()}
    </div>
  );
};

export default RecordPage;
