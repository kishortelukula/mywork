import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './TaskTables.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const groupTaskColumns = [
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon va />
      </IconButton>
      // <Button
      //   variant="contained"
      //   color="primary"
      //   onClick={() => handleButtonClick(params.row)}
      // >
      //   Action
      // </Button>
    ),
  },
  { field: 'reviewId', headerName: 'Review Id' },
  { field: 'division', headerName: 'Division' },
  { field: 'portfolio', headerName: 'Portfolio' },
  { field: 'childReviedId', headerName: 'Child Review Id' },
  { field: 'issueId', headerName: 'Issue Id' },
  { field: 'assignTo', headerName: 'Assigned To' },
  { field: 'taskStatus', headerName: 'Status' }
];

export function fetchGroupTask() {
  return axios.get('http://10.0.0.24:8088/fcr/GroupTask', {
    params: { groupName: 'SR Credit Reviewer', userName: 'kishor' }
  });
}

export function fetchMyTask() {
  return axios.get('http://10.0.0.24:8088/fcr/MyTask', {
    params: { userName: 'kishor' }
  });
}

export default function TaskTables() {
  const [getGroupTask, setGroupTask] = useState([]);
  const [getMyTask, setMyTask] = useState([]);
  const [value, setValue] = useState('1');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const groupTaskResponse = await fetchGroupTask();
        const myTaskResponse = await fetchMyTask();

        const groupTasksWithIds = groupTaskResponse.data.map(task => ({ ...task, id: task.taskId }));
        const myTasksWithIds = myTaskResponse.data.map(task => ({ ...task, id: task.taskId }));

        setGroupTask(groupTasksWithIds);
        setMyTask(myTasksWithIds);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    loadTasks();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="data-grid-container">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Lab API tabs example">
            <Tab label="Group Task" value="1" />
            <Tab label="My Task" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGrid
            rows={getGroupTask}
            columns={groupTaskColumns.map(column => ({
              ...column,
              headerClassName: 'custom-header-class',
              flex: 1,
              minWidth: 150,
              maxWidth: 300,
            }))}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10,20,30]}
            className="custom-data-grid"
          />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid
            rows={getMyTask}
            columns={groupTaskColumns.map(column => ({
              ...column,
              headerClassName: 'custom-header-class',
              flex: 1,
              minWidth: 150,
              maxWidth: 300,
            }))}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10,20,30]}
            className="custom-data-grid"
          />
        </TabPanel>
      </TabContext>
    </div>
  );
}
