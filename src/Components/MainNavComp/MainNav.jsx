import './MainNav.scss'
import {NavLink} from 'react-router-dom'

import logo from '../../Assets/logo.png'

export function MainNav(){

    return(
        <>
        <div className='mainNav'>
        <div className="logoDiv">
        <img src={logo} alt='logo'className='img'/>
        <p className='title'>WEALT HEALTH</p>
        </div>
        <p className='pageName'>HRnet</p>
        <nav>
        <NavLink to='/createEmployee'  className='link'> Create an employee</NavLink>
        <NavLink to='/employeeList' className='link'> List of employees</NavLink>
        </nav>
        </div>
        </>
    )
}