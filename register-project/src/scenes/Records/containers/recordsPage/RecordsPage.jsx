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


const RecordsPage = () => {

  return (
    <div className={styles["page-wrp"]}>
    </div>
  );
};

export default RecordsPage;
