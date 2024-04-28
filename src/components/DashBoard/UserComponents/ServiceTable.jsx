import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const UserMuitable = () => {
    const columns = [
        { id: 'serviceName', name: 'Name' },
        { id: 'email', name: 'Email' },
        { id: 'servicePnumber', name: 'Phone' },
    ];

    const handlechangepage = (event, newpage) => {
        pagechange(newpage);
    };

    const handleRowsPerPage = (event) => {
        rowperpagechange(+event.target.value);
        pagechange(0);
    };

    const [rows, rowchange] = useState([]);
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);

    useEffect(() => {
        fetch("http://localhost:8080/service").then(resp => {
            return resp.json();
        }).then(resp => {
            rowchange(resp);
        }).catch(e => {
            console.log(e.message);
        });
    }, []);

    const handleViewButtonClick = (row) => {
        Swal.fire({
            title: 'User Details',
            html: `<strong>Name:</strong> ${row.ServiceName}<br>
                   <strong>Email:</strong> ${row.email}<br>
                   <strong>Phone:</strong> ${row.servicePnumber}`,
            showCancelButton: true,
            confirmButtonText: 'Approve',
            cancelButtonText: 'Close',
            preConfirm: () => {
                return handleApproveUser(row.email); // Call approve function here
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Approved!', '', 'success');
            }
        });
    };

    const handleApproveUser = async (email) => {
        try {
            const response = await axios.put(`http://localhost:8080/service/approve`, email);
            //const response = await axios.post('http://localhost:8080/admin/login', { email, password });
            if (!response.ok) throw new Error('Failed to approve user');
            return response.json();
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Recently Registered Services</h1>
            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                <TableContainer sx={{ maxHeight: 450 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: '#475be8', color: 'white' }} key={column.id}>
                                        {column.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.slice(page * rowperpage, page * rowperpage + rowperpage).map((row, index) => (
                                <TableRow key={index}>
                                    {columns.map((column) => (
                                        <TableCell key={`${column.id}-${index}`}>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Button onClick={() => handleViewButtonClick(row)}>View</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowperpage}
                    page={page}
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default UserMuitable;
