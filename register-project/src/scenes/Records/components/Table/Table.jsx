import React from "react";
import { recordsData } from "store/data";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Link } from "react-router-dom";

const Table = () => {
  const columns = [
    {
      id: "fullName",
      Header: "ФІО Заповідача",
      accessor: ({id, fullName}) => (
        <Link className="gh-tc-redirect" to={`/records/${id}`}>
        {fullName}
        </Link>
      ),
      width: 250,
    },
    {
      Header: "Ідентифікаційний код",
      accessor: "taxNumber",
      width: 250,
      Cell: (props) => <span className="number">{props.value}</span>,
    },
    {
      id: "dateOfBirth",
      Header: "Рік народження",
      accessor: ({ dateOfBirth }) => dateOfBirth.toLocaleDateString(),
      width: 250,
    },
    {
      Header: "Вид відомості",
      accessor: "recordType",
      width: 250,
    },
  ];

  return (
    <ReactTable
      sortable={true}
      data={recordsData}
      columns={columns}
      defaultPageSize={10}
      width="80%"
      noDataText="No Results"
      style={{
        height: "600px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="-striped -highlight"
    />
  );
};

export default Table;
