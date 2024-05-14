import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'

export function EmployeeList(){
    const users = useSelector(getUser);
    const userList=users.user;

    return(
        <div className="employeeList">
            <p className='title'>Employee List</p>

            <ul>
                {userList.map((user, index) => (
                    <li key={index}>{user.firstName}</li>
                ))}
            </ul>
        </div>
    )
}
