import React from "react";

import styles from "./styles.module.scss";

const RecordField = ({ label, value }) => (
  <div className={styles.container}>
    <span className={styles.label}>{label}:&nbsp;&nbsp;&nbsp;</span>
    <span>{value}</span>
  </div>
);

export { RecordField };
