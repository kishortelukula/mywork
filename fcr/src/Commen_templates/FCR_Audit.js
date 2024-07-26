import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import './FCR_Audit.css'; // Ensure this is the correct path to your CSS file
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Fcr_Audit({ reviewId }) {
    const [audit, setAudit] = useState([]);

    useEffect(() => {
        fetchAudit();
    }, [reviewId]);

    const fetchAudit = async () => {
        try {
            const response = await axios.get('http://10.0.0.24:8088/fcr/fetchAudit', {
                params: { reviewId }
            });
            console.log("Audit data:", response.data);
            setAudit(response.data);
        } catch (error) {
            console.error("Error fetching audit data:", error);
        }
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
        <div className="auditTabs">
        <TabContext value={value}>
           
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Comments" value="1" />
                    <Tab label="Audit Trail" value="2" />
                    <Tab label="Documents" value="3" />
                </TabList>
           
            <TabPanel value="1">Comments</TabPanel>
            <TabPanel value="2">
            <TableContainer component={Paper} className="tableContainer">
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="headerCell">Review Id</TableCell>
                            <TableCell className="headerCell" align="right">Current Action</TableCell>
                            <TableCell className="headerCell" align="right">In Time</TableCell>
                            <TableCell className="headerCell" align="right">Out Time</TableCell>
                            <TableCell className="headerCell" align="right">Action By</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {audit.map((row) => (
                            <TableRow key={row.slNo}>
                                <TableCell component="th" scope="row">
                                    {row.reviewId}
                                </TableCell>
                                <TableCell align="right">{row.currentAction}</TableCell>
                                <TableCell align="right">{row.inTime}</TableCell>
                                <TableCell align="right">{row.outTime}</TableCell>
                                <TableCell align="right">{row.actionedBy}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            </TabPanel>
            <TabPanel value="3">Documents</TabPanel>
        </TabContext>

        </div>
        
        
       </>
    );
}
