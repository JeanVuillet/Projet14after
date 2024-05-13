import './MainData.scss';


export function MainData({firstName, lastName,dateOfBirth, starteDate}) {


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
                <input type="text" id='dateOfBirth' ref={dateOfBirth}/>
            </div>
            <div className="startDate">
                <label htmlFor='startDate' placeholder='mm/dd/yyyy' >Start Date</label>
                <input type="text" id='stateDate' ref={starteDate}/>
            </div>
        </div>
    );
}


