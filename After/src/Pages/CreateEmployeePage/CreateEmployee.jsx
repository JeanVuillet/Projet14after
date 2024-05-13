import './CreateEmployee.scss'
import { MainData } from './MainDataComp/MainData.jsx'
import { Address } from './AddressComp/Address.jsx';
import { useRef } from 'react';
export function CreateEmployee(){


        const firstName = useRef(null);
        const lastName = useRef(null);
        const dateOfBirth = useRef(null);
        const starteDate = useRef(null);
        const street= useRef(null);
        const city=useRef(null);
        const state=useRef(null);
        const zip=useRef(null);
        const departement=useRef(null);
        function getData() {
            return {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                dateOfBirth: dateOfBirth.current.value,
                stateData: starteDate.current.value,
                street:street.current.value,
                city:city.current.value,
                state:state.current.value,
                zip:zip.current.value,
                departement:departement.current.value,
            };
        }

    
    return(
     
        <div className="createEmployee">Create Employee
        <div className="emplyeDiv">
        <form className='form'>
    <MainData firstName={firstName} lastName={lastName} dateOfBirth={dateOfBirth} stateDate={starteDate}/>
    <Address street={street} city={city} state={state} zip={zip}/>
    <div className="departement">
        <label htmlFor="departement">Departement</label>
        <input type="text" id='departement' ref={departement}/>
    </div>
        </form>
        <button onClick={()=>console.log(getData())}> validate</button>
        </div>
        </div>
   
    )
}