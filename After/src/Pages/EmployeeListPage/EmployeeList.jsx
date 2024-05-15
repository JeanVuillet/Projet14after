import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'

export function EmployeeList(){
    const users = useSelector(getUser);
    const userList=users.user;

    return(
        <div className="employeeList">
            <p className='title'>Employee List</p>



        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>State Data</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user, index) => (
                    <tr>
                    <td key={index}>{user.firstName}</td>
                    <td key={index}>{user.lastName}</td>
                    <td key={index}>{user.dateOfBirth}</td>
                    <td key={index}>{user.startDate}</td>
                    <td key={index}>{user.street}</td>
                    <td key={index}>{user.city}</td>
                    <td key={index}>{user.state}</td>
                    <td key={index}>{user.zip}</td>
                    <td key={index}>{user.departement}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
