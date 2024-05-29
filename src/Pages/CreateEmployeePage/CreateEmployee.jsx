import "./CreateEmployee.scss";
import { MainData } from "./MainDataComp/MainData.jsx";
import { Address } from "./AddressComp/Address.jsx";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { mySlice } from "../../store.js";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import Select from "react-select";
import departmentList from "./../../Assets/departments.json";
import { useEffect } from "react";
import Modal from "mymodal4";

export function CreateEmployee() {
  const [isChanged, setIsChanged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [datesFilled, setDatesFilled] = useState(true);
  const [state, setState] = useState(null);
  const [department, setdepartment] = useState(null);

  const dispatch = useDispatch();

  const form = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const street = useRef(null);
  const city = useRef(null);

  const zip = useRef(null);

  const containerObject = {
    color: "red",
    backgroundColor: "blue",
  };

  function getData() {
    return {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      street: street.current.value,
      city: city.current.value,
      state: state.value,
      zip: zip.current.value,
      department: department.value,
    };
  }

  // const newDepertementList=departmentList.map((states)=>({value:states.value , label:states.value}))

  function selectdepartment(selectedOption) {
    setdepartment(selectedOption);
  }

  function createUser(event) {
    event.preventDefault();

    setDatesFilled(false);

    const newUser = getData();

    if (newUser.startDate && newUser.dateOfBirth) {
      setDatesFilled(true);
      dispatch(mySlice.actions.addUser(newUser));
      form.current.reset();
      setIsChanged((prevValue) => !prevValue);
      setIsOpen(true);

      setdepartment(null);
      setDateOfBirth(null);
      setStartDate(null);
      setState(null);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="createEmployee">
        <h1> Create Employee</h1>

        <form className="form" onSubmit={createUser} ref={form}>
          <div className="employeDiv">
            <MainData
              firstName={firstName}
              lastName={lastName}
              setDateOfBirth={setDateOfBirth}
              setStartDate={setStartDate}
              startDate={startDate}
              dateOfBirth={dateOfBirth}
              datesFilled={datesFilled}
            />
            <Address
              street={street}
              city={city}
              state={state}
              setState={setState}
              zip={zip}
            />
            <div className="department">
              <p className="departmentTitle"> Department</p>
              <div className="selector">
                <Select
                  value={department}
                  options={departmentList}
                  onChange={selectdepartment}
                  required
                />
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            <button type="submit" className="validButton">
              {" "}
              validate
            </button>
          </div>
        </form>
       {/* <Modal
          isOpen={false}
          // setIsOpen={setIsOpen}
          change={false}
          modalMessage={"Employee created !"}
          buttonMessage={"OK"}
        /> */}
      </div>
    </LocalizationProvider>
    //last 40
  )
}
