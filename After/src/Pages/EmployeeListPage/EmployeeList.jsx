import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'

export function EmployeeList(){
    const user=useSelector(getUser);
    return(
        <div className="employeeList">
            <p className='title'>employee list</p>


            <ul>
            <li> {user? user.user[0].firstName:null}</li>
            <li> {user? user.user[1].firstName:null}</li>
            <li> {user? user.user[2].firstName:null}</li>
            <li> {user? user.user[3].firstName:null}</li>
            </ul>
     
        <div className="list">

        </div>
        </div>
    )
}