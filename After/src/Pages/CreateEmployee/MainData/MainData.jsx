import './MainData.scss';


export function MainData({firstName, lastName,dateOfBirth, stateData}) {


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
            <div className="stateData">
                <label htmlFor='stateData' placeholder='mm/dd/yyyy' >State Date</label>
                <input type="text" id='stateData' ref={stateData}/>
            </div>
        </div>
    );
}


