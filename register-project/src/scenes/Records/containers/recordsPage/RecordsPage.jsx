import React from "react";
import styles from "./styles.module.scss";
import Table from "scenes/Records/components/Table/Table";

const RecordsPage = () => {
  return (
    <div className={styles["page-wrp"]}>
      <Table />
    </div>
  );
};

export default RecordsPage;
