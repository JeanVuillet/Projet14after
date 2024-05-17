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
        <NavLink to='/createEmployee'  className='link'> Creer un employé</NavLink>
        <NavLink to='/employeeList' className='link'> Liste des employés</NavLink>
        </nav>
        </div>
        </>
    )
}