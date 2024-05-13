import './MainNav.scss'
import {NavLink} from 'react-router-dom'

import logo from '../Assets/logo.png'

export function MainNav(){

    return(
        <>
        <div className='mainNav'>
        <img src={logo} alt='logo'className='.img'/>
        <p className='title'>WEALT HEALTH</p>
        <p className='pageName'>HRnet</p>
        <nav>
        <NavLink to='/createEmployee'  > Creer un employé</NavLink>
        <NavLink to='/employeeList'> Liste des employés</NavLink>
        </nav>
        </div>
        </>
    )
}