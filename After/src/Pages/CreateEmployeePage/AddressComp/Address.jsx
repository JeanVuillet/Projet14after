import './Address.scss'


export function Address({street,city, state, zip }){

    return(
        <div className="adress">
        <p className='adressTitle'>Adress</p>
        <div className="addressContent"> 

            <div className="street">
            <label htmlFor='street'>Street</label>
            <input id='street' ref={street}></input>
            </div>
            <div className="city">
                <label htmlFor="city">City</label>
                <input id='city' ref={city}></input>
            </div>
            <div className="stateDiv">
                <label htmlFor='state'>State</label>
                <input type="text"  id='state' ref={state}/>
            </div>
            <div className="zipCode">
                <label htmlFor='zip'>Zip Code</label>
                <input type="text" id='zip' ref={zip}/>
            </div>
        </div>
        </div>
     
    )
}