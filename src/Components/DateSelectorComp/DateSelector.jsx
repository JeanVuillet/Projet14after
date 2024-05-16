import DatePicker from 'react-datepicker';
import { useState } from 'react';

export function DateSelector(){

    const [selectedDate, setSelectedDate]=useState(null)

    function changeDate(date){
        setSelectedDate(date)
    }
    return(
<div className="dateSelector">
<DatePicker  selected={selectedDate} onChange={changeDate} dateFormat='dd/MM/yyyy'/>
</div>
    )
}