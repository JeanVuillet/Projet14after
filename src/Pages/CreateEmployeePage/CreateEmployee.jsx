import "./CreateEmployee.scss";
import { MainData } from "./MainDataComp/MainData.jsx";
import { Address } from "./AddressComp/Address.jsx";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { mySlice } from "../../store.js";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import Select from 'react-select'
import departementList from './../../Assets/departements.json'
import { useEffect } from "react";
import Modal from './Modalcomp.jsx'


export function CreateEmployee() {

  const [isChanged, setIsChanged]=useState(false)
  const [isOpen, setIsOpen]=useState(false);

  const [dateOfBirth, setDateOfBirth] = useState(false);
  const[startDate, setStartDate]=useState(false);
  const [datesFilled, setDatesFilled]=useState(true);
  const [state, setState]=useState(null)
  const [departement, setDepartement]=useState(null);



  const dispatch = useDispatch();

  const form=useRef(null)
  const firstName = useRef(null);
  const lastName = useRef(null);

  const street = useRef(null);
  const city = useRef(null);

  const zip = useRef(null);

const containerObject={
  color:'red',
  backgroundColor:'blue'
}

  function getData() {

    return {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      dateOfBirth: dateOfBirth,
      startDate:startDate,
      street: street.current.value,
      city: city.current.value,
      state: state,
      zip: zip.current.value,
      departement:departement,
     
    };
  }

  // const newDepertementList=departementList.map((states)=>({value:states.value , label:states.value}))
  
  function selectDepartement(selectedOption){
  setDepartement(selectedOption.value)
  }

  function createUser(event) {
    event.preventDefault();

    setDatesFilled(false)
   
    const newUser = getData();

    if (newUser.startDate && newUser.dateOfBirth){
      setDatesFilled(true)
    dispatch(mySlice.actions.addUser(newUser));
    form.current.reset()
  setIsChanged(prevValue=>!prevValue);
  setIsOpen(true);

    setDepartement(null);

    }


  }
  


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   
    <div className="createEmployee">
      Create Employee
      <form className="form" onSubmit={createUser} ref={form}>
        <div className="employeDiv"  >
          <MainData
            firstName={firstName}
            lastName={lastName}
            setDateOfBirth={setDateOfBirth}
            setStartDate={setStartDate}
        
            startDate={startDate}
            dateOfBirth={dateOfBirth}
            datesFilled={datesFilled} 
       
          />
          <Address street={street} city={city} setState={setState} zip={zip} />
          <div className="departement">
       <Select options={departementList} onChange={ selectDepartement} required/>
          </div>
          
        </div>
        <button type='submit' className="validButton"> validate</button>
      </form>
       <Modal change={isChanged} setIsOpen={setIsOpen} modalMessage={'utilisateur créé !'} buttonMessage={'merci'}/>
    </div>
    </LocalizationProvider>
  );
}
