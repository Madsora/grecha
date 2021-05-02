import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {} from "store/data";

import { styles } from "./RecordPage.module.scss";

const MOCK_LOADING_TIME = 1000;

const RecordPage = ({}) => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, MOCK_LOADING_TIME);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className={styles.pageContent}>
        <div></div>
      </div>
    </div>
  );
};

export default RecordPage;
