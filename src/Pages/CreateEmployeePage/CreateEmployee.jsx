import "./CreateEmployee.scss";
import { MainData } from "./MainDataComp/MainData.jsx";
import { Address } from "./AddressComp/Address.jsx";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { mySlice } from "../../store.js";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import dayjs from 'dayjs';
export function CreateEmployee() {
  const [validDivOpen, setValidDiv]=useState(false)

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const[startDate, setStartDate]=useState(null);
  const [state, setState]=useState(null)

  let dateBirthValue=null;
  const dispatch = useDispatch();

  const form=useRef(null)
  const firstName = useRef(null);
  const lastName = useRef(null);

  const street = useRef(null);
  const city = useRef(null);

  const zip = useRef(null);
  const departement = useRef(null);
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
      departement: departement.current.value,
     
    };
  }

  function createUser(event) {
    event.preventDefault();
   
    const newUser = getData();
    dispatch(mySlice.actions.addUser(newUser));
    form.current.reset()
    setValidDiv(true);
  }
  function closeModal(){
    setValidDiv(false);
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
            dateBirthValue={dateBirthValue}
          />
          <Address street={street} city={city} setState={setState} zip={zip} />
          <div className="departement">
            <label htmlFor="departement">Departement</label>
            <input type="text" id="departement" ref={departement} />
          </div>
          
        </div>
        <button type='submit' className="validButton"> validate</button>
      </form>
      <div className="validDiv" style={ validDivOpen? { display:'flex'}:{display:'none'}}>
        L'utilisateur a ete cree. Bravo !
        <button onClick={closeModal}>Merci</button>
      </div>
    </div>
    </LocalizationProvider>
  );
}
