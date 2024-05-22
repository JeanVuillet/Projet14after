import './Address.scss'
import React from 'react'
import Select from 'react-select'
import states from './../../../Assets/states.json';

export function Address({ street,city, setState, zip }){

    const options= states;
    const stateNames=states.map((states)=>({value:states.value , label:states.value}))


  function  handleStateChange(selectedOption){
setState(selectedOption.value)
    }
    return(
        <div className="adress">
        <p className='adressTitle'>Adress</p>
        <div className="addressContent"> 

            <div className="street">
            <label htmlFor='street'>Street</label>
            <input id='street' ref={street} required></input>
            </div>
            <div className="city">
                <label htmlFor="city">City</label>
                <input id='city' ref={city} required></input>
            </div>
            <div className="stateDiv">
                <label htmlFor='state'>State</label>
          <Select options={options} onChange={handleStateChange} required/>
            </div>
            <div className="zipCode">
                <label htmlFor='zip'>Zip Code</label>
                <input type="text" id='zip' ref={zip} required/>
            </div>
        </div>
        </div>
     
    )
}