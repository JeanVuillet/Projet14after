import './MainData.scss';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


export function MainData({ firstName, lastName, setDateOfBirth, setStartDate, startDate, dateOfBirth, datesFilled }) {




  const dateOfBirthChange = (date) => {
    if (date) {
      const formattedDate = dayjs(date).format('DD.MM.YYYY');
      if (formattedDate !== 'Invalid Date') {
        setDateOfBirth(formattedDate);

      } else {
        setDateOfBirth(null);

      }
    } else {
      setDateOfBirth(null);
 
    }
  };

  const startDateChange = (date) => {
    const formattedDate = dayjs(date).format('DD.MM.YYYY');
    if (formattedDate !== 'Invalid Date') {
      setStartDate(formattedDate);
    } else {
      setStartDate(null);
    }
  };

  return (
    <div className="mainData">
      <div className="firstName">
        <label htmlFor='firstName'>First name</label>
        <input type="text" id='firstName' placeholder='first name' ref={firstName} required />
      </div>
      <div className="lastName">
        <label htmlFor='lastName'>Last name</label>
        <input type="text" id='lastName' placeholder='last name' ref={lastName} required />
      </div>
      <div className="dateOfBirth">
        <label >Date of Birth</label>
        <DatePicker
       
          value={dateOfBirth? dayjs(dateOfBirth, 'DD.MM.YYYY'):null}
          onChange={dateOfBirthChange}
          renderInput={(params) => <input {...params} placeholder='dd/mm/yyyy' />}
          className='custom-date-picker'
        />
        {(!dateOfBirth && !datesFilled) && <div>select date of birth</div>}
      </div>
      <div className="startDate">
        <label >Start Date</label>
        <DatePicker

          value={startDate ? dayjs(startDate, 'DD.MM.YYYY') : null}
          onChange={startDateChange}
          renderInput={(params) => <input {...params} placeholder='dd/mm/yyyy' />}
          className='custom-date-picker'
        />
        {(!startDate && !datesFilled) && <div>select start date</div>}
      </div>
    </div>
  );
}
