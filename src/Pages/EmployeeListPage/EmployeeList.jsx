import './EmployeeList.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../store'
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';


export function EmployeeList(){

    const users = useSelector(getUser);
    const userList = users.user;
    const [records, setRecords] = useState(userList);


        // Lorsque userList est mis à jour, mettre à jour également records


    function FindName(e) {

        
        const dataFiltered = userList.filter((element) => (
            element.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            element.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        ));

        setRecords(dataFiltered);
   
        
        if (!e.target.value) {
            setRecords(userList);
        }
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
        // Autres colonnes...
    ];

    return (
        <>
            <div className="finder">
                <label>Find User</label>
                <input onChange={FindName}></input>
            </div>
            <DataTable
                columns={columns}
                data={records}
            />
        </>
    );
};
