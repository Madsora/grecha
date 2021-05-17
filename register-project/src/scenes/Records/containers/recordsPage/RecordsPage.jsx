import React, { useState } from "react";
import Table from "scenes/Records/components/Table/Table";
import { useRecordsContext } from "store/recordsProvider";
import { RecordSearchField, UserObligatoryField } from "models/record";
import SearchModal from "../../components/SearchModal";

import styles from "./styles.module.scss";
import { Button } from "react-bootstrap";

const DEFAULT_FILTERS = {
  [UserObligatoryField.fullName]: "",
  [UserObligatoryField.taxNumber]: "",
  [UserObligatoryField.dateOfBirth]: null,
};

const RecordsPage = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [isShowModal, setShowModal] = useState(false);

  const { recordsData } = useRecordsContext();

  const filteredRecords = recordsData
    .map((record) => {
      if (!Object.values(filters).some((f) => f)) {
        return record;
      }
      const fullnameCheck =
        !filters[UserObligatoryField.fullName] ||
        record[UserObligatoryField.fullName].includes(
          filters[UserObligatoryField.fullName]
        );

      const taxCheck =
        !filters[UserObligatoryField.taxNumber] ||
        record[UserObligatoryField.taxNumber].includes(
          filters[UserObligatoryField.taxNumber]
        );

      const dateCheck =
        !filters[UserObligatoryField.dateOfBirth] ||
        (record.dateOfBirth.getFullYear() ===
          filters[UserObligatoryField.dateOfBirth].getFullYear() &&
          record.dateOfBirth.getMonth() ===
            filters[UserObligatoryField.dateOfBirth].getMonth() &&
          record.dateOfBirth.getDate() ===
            filters[UserObligatoryField.dateOfBirth].getDate());

      const hasPassed = fullnameCheck && taxCheck && dateCheck;

      return hasPassed ? record : null;
    })
    .filter((r) => r);

  const isHideData = !Object.values(filters).some((f) => f);

  return (
    <div className={styles["page-wrp"]}>
      <div className={styles.buttonsWrapper}>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Фільтри
        </Button>
        <Button variant="secondary" onClick={() => setFilters(DEFAULT_FILTERS)}>
          Скинути фільтри
        </Button>
      </div>

      <SearchModal
        isShow={isShowModal}
        filters={filters}
        setFilters={setFilters}
        onHide={() => setShowModal(false)}
      />
      <Table recordsData={isHideData ? [] : filteredRecords} />
    </div>
  );
};

export default RecordsPage;
