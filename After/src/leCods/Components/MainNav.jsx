import './MainNav.scss'
import {NavLink} from 'react-router-dom'

export function MainNav(){

    return(
        <>
        <div className='mainNav'>
        <NavLink to='/createEmployee'  > Creer un employé</NavLink>
        <NavLink to='/employeeList'> Liste des employés</NavLink>
        </div>
        </>
    )
}