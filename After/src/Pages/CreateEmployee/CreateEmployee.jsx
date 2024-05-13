import './CreateEmployee.scss'
import { MainData } from './MainData/MainData.jsx'
import { useRef } from 'react';
export function CreateEmployee(){


        const firstName = useRef(null);
        const lastName = useRef(null);
        const dateOfBirth = useRef(null);
        const stateData = useRef(null);
    
        function getData() {
            return {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                dateOfBirth: dateOfBirth.current.value,
                stateData: stateData.current.value
            };
        }

    
    return(
        <>
        <div className="create">Create Employee vvv</div>
        <form>
    <MainData firstName={firstName} lastName={lastName} dateOfBirth={dateOfBirth} stateData={stateData}/>
        </form>
        <button onClick={()=>console.log(getData())}> validate</button>
        </>
    )
}