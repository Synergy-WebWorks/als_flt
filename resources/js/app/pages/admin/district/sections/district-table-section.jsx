import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { router } from '@inertiajs/react';
import { Button } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import EditDistrictSection from './edit-district-section';
import DeleteDistrictSection from './delete-district-section';


export default function DisctrictTableSection() {
    const { districts } = useSelector((state) => state.districts)
    console.log('districts',districts)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>District Name</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {districts?.map((res, i) => {
                        const dob = moment(res.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
                        const age = moment().diff(dob, 'years');
                        return (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{moment(res.created_at).format('LL')}</TableCell>
                             
                                <TableCell>
                                    <div className='flex gap-2'>
                                        {/* <Button
                                            onClick={() => router.visit(`/administrator/schedule/${res.unique_id}`)}
                                            size='small'
                                            variant='contained'
                                            color='success'>
                                            <Visibility />
                                        </Button> */}
                                        <EditDistrictSection data={res}/>
                                        <DeleteDistrictSection data={res}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
