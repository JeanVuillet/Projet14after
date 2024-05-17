import './MainData.scss';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useEffect } from 'react';


export function MainData({firstName, lastName, setDateOfBirth,  setStartDate, startDate, dateOfBirth, datesFilled}) {



    const dateOfBirthChange = (newDate) => {
  
      // Vous pouvez faire quelque chose avec la nouvelle date sélectionnée
      const formattedDate = dayjs(newDate).format('DD.MM.YYYY');
      if (formattedDate !=='Invalid Date'){
      setDateOfBirth(formattedDate)}
      else{setDateOfBirth(null)};

     

    };
    const startDateChange=(date)=>{
        const formattedDate = dayjs(date).format('DD.MM.YYYY');
        if (formattedDate !=='Invalid Date')
        {setStartDate(formattedDate)}
        else{setStartDate(null)}


    }
    return (
        <div className="mainData">
            <div className="firstName">
                <label htmlFor='firstName'>First name</label>
                <input type="text" id='firstName' placeholder='first name' ref={firstName} required />
            </div>
            <div className="lastName">
                <label htmlFor='lastName'>Last name</label>
                <input type="text" id='lastName' placeholder='last name' ref={lastName} required/>
            </div>
            <div className="dateOfBirth">
                <label htmlFor='dateOfBirth' placeholder='mm/dd/yyyy' >Date of Birth</label>
                 <DatePicker  onChange={dateOfBirthChange}  className='custom-date-picker' placeholder='dd/mm/yyyy'/>
                 { (dateOfBirth || datesFilled) ?'':<div>select date of birth </div>}
            </div>
            <div className="startDate">
                <label htmlFor='startDate' placeholder='mm/dd/yyyy' >Start Date</label>
                <DatePicker onChange={startDateChange} className='custom-date-picker' placeholder='dd/mm/yyyy' />
                { (startDate  || datesFilled) ?'':<div>select start date </div>}
            </div>
        </div>
    );
}


