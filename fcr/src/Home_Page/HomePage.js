// HomePage.js
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid } from '@mui/x-data-grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './HomePage.css';
import PlayArrow from '@mui/icons-material/PlayArrow';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  p: 4,
};

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [division, setDivision] = useState('');
  const [group, setGroup] = useState('');
  const [divisionList, setDivisionList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [groupTask, setGroupTask] = useState([]);
  const [myTask, setMyTask] = useState([]);
  const [value, setValue] = useState('1');
  const [refreshKey, setRefreshKey] = useState(0);
 

  useEffect(() => {
    getDivision();
    loadTasks();
  }, [refreshKey]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const divisionChange = async (event) => {
    const newValue = event.target.value;
    setDivision(newValue);
    await getGroup(newValue);
  };

  const groupChange = (event) => {
    const newValue = event.target.value;
    setGroup(newValue);
  };

  const getDivision = async () => {
    try {
      const response = await axios.get('http://10.0.0.24:8088/fcr/Division');
      setDivisionList(response.data);
    } catch (error) {
      console.error('Error fetching divisions:', error);
    }
  };

  const getGroup = async (selectedDivision) => {
    try {
      if (selectedDivision !== '') {
        const response = await axios.get('http://10.0.0.24:8088/fcr/Group', {
          params: { group: selectedDivision },
        });
        setGroupList(response.data);
      } else {
        setGroupList([]);
      }
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const handleClear = () => {
    setDivision('');
    setGroup('');
  };

  const handleCreate = async () => {
    if (division && group) {
      const caseCreation = {
        division,
        portfolio: group,
      };

      try {
        const caseRes = await axios.post('http://10.0.0.24:8088/fcr/caseCreation', caseCreation);
        console.log('Case created:', caseRes.data);
        toast.success(caseRes.data, { position: 'top-right' });
        handleClear();
        setRefreshKey(prevKey => prevKey + 1);
      } catch (error) {
        console.error('Failed to create case:', error);
        toast.error('Failed to create case');
      } finally {
        handleClose();
      }
    } else {
      toast.error('Division and Group are required');
    }
  };

  const loadTasks = async () => {
    try {
      const [groupTaskResponse, myTaskResponse] = await Promise.all([
        axios.get('http://10.0.0.24:8088/fcr/GroupTask', {
          params: { groupName: 'SR Credit Reviewer', userName: 'kishor' }
        }),
        axios.get('http://10.0.0.24:8088/fcr/MyTask', {
          params: { userName: 'kishor' }
        })
      ]);

      setGroupTask(groupTaskResponse.data.map(task => ({ ...task, id: task.taskId })));
      setMyTask(myTaskResponse.data.map(task => ({ ...task, id: task.taskId })));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = (rowData) => {
    // Access rowData properties
    console.log('Row Data:', rowData);
    switch (rowData.assignTo) {
      case 'SR Credit Reviewer':
        window.open(`/SRCreditReviewer?reviewId=${rowData.reviewId}`,'_blank');
        // navigate(`/SRCreditReviewer?reviewId=${rowData.reviewId}`); // Navigate to the new page
        // window.open("/SRCreditReviewer")
        break;
      default:
        console.log('No matching route');
    }
  };

  const groupTaskColumns = [
    {
      field: 'action',
      headerName: 'Action',
      flex: 0,
      minWidth: 50,
      maxWidth: 70,
      renderCell: (params) => (
        <IconButton color="secondary" aria-label="play"
            onClick={() => handleButtonClick(params.row)}
        >
          <PlayArrow />
        </IconButton>
      ),
      sortable: false,
      filterable: false,
    },
    { field: 'reviewId', headerName: 'Review Id' },
    { field: 'division', headerName: 'Division' },
    { field: 'portfolio', headerName: 'Portfolio' },
    { field: 'childReviedId', headerName: 'Child Review Id' },
    { field: 'issueId', headerName: 'Issue Id' },
    { field: 'assignTo', headerName: 'Assigned To' },
    { field: 'taskStatus', headerName: 'Status' }
  ];

  return (
    <div>
      <ToastContainer />
      <IconButton color="secondary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Case Creation
          </Typography>
          <InputLabel id="division-label" sx={{ display: 'inline' }}>
            Division
          </InputLabel>
          <Select
            labelId="division-label"
            id="division-select"
            value={division}
            onChange={divisionChange}
            label="Division"
            sx={{ width: '100%', height: '3rem' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {divisionList.map((division, index) => (
              <MenuItem key={index} value={division}>
                {division}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="group-label" sx={{ display: 'inline' }}>
            Group
          </InputLabel>
          <Select
            labelId="group-label"
            id="group-select"
            value={group}
            onChange={groupChange}
            label="Group"
            sx={{ width: '100%', height: '3rem' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {groupList.map((group, index) => (
              <MenuItem key={index} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
          <Stack direction="row" spacing={2} style={{ marginTop: '10px' }}>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClear} color="error">
              Clear
            </Button>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleCreate} color="success">
              Create
            </Button>
          </Stack>
        </Box>
      </Modal>

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
              rows={groupTask}
              columns={groupTaskColumns.map(column => ({
                ...column,
                headerClassName: 'custom-header-class',
                flex: 1,
              }))}
              autoHeight
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              className="custom-data-grid"
            />
          </TabPanel>
          <TabPanel value="2">
            <DataGrid
              rows={myTask}
              columns={groupTaskColumns.map(column => ({
                ...column,
                headerClassName: 'custom-header-class',
                flex: 1,
              }))}
              autoHeight
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              className="custom-data-grid"
            />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
