import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'

export function EmployeeList(){
    const user=useSelector(getUser);
    return(
        <div className="employeeList">
            <p className='title'>employee list</p>
      {user? user.firstName:null}
        <div className="list">

        </div>
        </div>
    )
}