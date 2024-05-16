import './MainData.scss';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


export function MainData({firstName, lastName,setDateOfBirth, setStartDate}) {


    const dateOfBirthChange = (newDate) => {
  
      // Vous pouvez faire quelque chose avec la nouvelle date sélectionnée
      const formattedDate = dayjs(newDate).format('DD.MM.YYYY');
      setDateOfBirth(formattedDate);
     

    };
    const startDateChange=(date)=>{
        const formattedDate = dayjs(date).format('DD.MM.YYYY');
        setStartDate(formattedDate)
    }
    return (
        <div className="mainData">
            <div className="firstName">
                <label htmlFor='firstName'>First name</label>
                <input type="text" id='firstName' placeholder='first name' ref={firstName} />
            </div>
            <div className="lastName">
                <label htmlFor='lastName'>Last name</label>
                <input type="text" id='lastName' placeholder='last name' ref={lastName} />
            </div>
            <div className="dateOfBirth">
                <label htmlFor='dateOfBirth' placeholder='mm/dd/yyyy' >Date of Birth</label>
                 <DatePicker  onChange={dateOfBirthChange}  className='custom-date-picker'/>
            </div>
            <div className="startDate">
                <label htmlFor='startDate' placeholder='mm/dd/yyyy' >Start Date</label>
                <DatePicker onChange={startDateChange} className='custom-date-picker'/>
            </div>
        </div>
    );
}


