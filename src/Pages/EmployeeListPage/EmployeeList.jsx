import "./EmployeeList.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../store";
import DataTable from "react-data-table-component";
import { useState } from "react";


export function EmployeeList() {
  const users = useSelector(getUser);
  const userList = users.user;
  let [records, setRecords] = useState(userList);

  function FindName(e) {
    const dataFilterd = userList.filter((element) => {
      return (
        element.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        element.firstName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setRecords(dataFilterd);

    if (!e.target.value) {
      setRecords(userList);
    }
  }

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Date of birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Start date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zip,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
  ];


  return (
    <div className="employeList">
      <h1>List of employees</h1>
      <div className="table">
        <div className="finder">
          <label>find User</label>
          <input onChange={FindName}></input>
        </div>
        <DataTable columns={columns} data={records} className="dataTable" />
      </div>
    </div>
  );
}
