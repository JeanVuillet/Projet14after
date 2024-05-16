import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';


export function EmployeeList(){



    const users = useSelector(getUser);
    const userList=users.user;
    let [records, setRecords]=useState(userList)


 function FindName(e){


    const dataFilterd=  userList.filter((element)=>{ return(
element.lastName.toLowerCase().includes(e.target.value.toLowerCase())
|| element.firstName.toLowerCase().includes(e.target.value.toLowerCase())

)})
setRecords(dataFilterd)

if(! e.target.value)
   {setRecords(userList)}

}


const columns = [
	{
		name: 'FirstName',
		selector: row => row.firstName,
        sortable:true
	},
	{
		name: 'LastName',
		selector: row => row.lastName,
        sortable:true
	},
    {
		name: 'DateOfBirth',
		selector: row => row.dateOfBirth,
        sortable:true
	},
    {
		name: 'StartDate',
		selector: row => row.startDate,
        sortable:true
	},
    {
		name: 'Street',
		selector: row => row.street,
        sortable:true
	},
    {
		name: 'City',
		selector: row => row.city,
        sortable:true
	},
    {
		name: 'State',
		selector: row => row.state,
        sortable:true
	},
    {
		name: 'Zip Code',
		selector: row => row.zip,
        sortable:true
	},
    {
		name: 'Departement',
		selector: row => row.departement,
        sortable:true
	},

];

const data = userList;


	return (
        <>
        <div className="finder">
            <label>find User</label>
            <input onChange={FindName}></input>
        </div>
		<DataTable
			columns={columns}
			data={records}
		/>
        </>
	);
};

