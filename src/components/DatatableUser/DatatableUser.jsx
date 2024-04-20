import React, { useEffect, useState } from 'react'
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Datatable = () => {
  const [users, setUsers] = useState(''); 
  const [columns, setColumns] = useState([]);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
       
        const response = await axios.get('http://localhost:8080/user');
        setUsers(response.data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); 
  }, []); 

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:8080/user/${email}`);
      setUsers(users.filter(user => user.email !== email));
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUserColumn = async (newColumnValue) => {
    try {
      
      await axios.put('http://localhost:8080/user/${email}', { columnValue: newColumnValue });
  
     
      setUsers(users.map(user => ({
        ...user,
        columnName: newColumnValue, 
      })));
  
      console.log('Column updated successfully for all users');
    } catch (error) {
      console.error('Error updating column:', error);
    }
  };

  const userColumns = [
    {
        field:"user",
        headerName:"User",
        width:"150",
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    {params.row.public_firstname} {params.row.public_lastname}
                </div>
            );
        },
    },
    {
      field:"email",
      headerName:"Email",
      width:100,
    },
    {
      field:"public_pnumber",
      headerName:"Phone Number",
      width:150,
    },
    {
      field:"public_nic",
      headerName:"NIC",
      width:100,
    },
    {
      field:"public_address",
      headerName:"Address",
      width:230,
    },
  ]
    const actionColumn = [
      {
        
        field:"action",
        headerName:"Action",
        width:200,
        renderCell: (params) => {
        

          return(
            <div className='cellAction'>
           
              <button className='viewButton' onClick={editUserColumn}>Edit</button>
              
              <button className='deleteButton' onClick={() => deleteUser(params.row.email)} >Delete</button>
              
            </div>
          );
        },
      },
    ];

  return (
    <div className='datatable'>
       <DataGrid
        rows={users}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable