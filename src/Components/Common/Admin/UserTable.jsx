import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  CircularProgress, Box, Typography, Menu, MenuItem, Checkbox, ListItemText, TextField, InputAdornment
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetAllUsers, useRestart, useNextStep } from '../../../Hooks/index.mjs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons for actions
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const rolesOptions = [
  { value: "1", label: "Admin" },
  { value: "2", label: "Intervention" },
  { value: "3", label: "Control" }
];

const UserTable = ({ onSendEmail, onResetPassword, onDeleteUser }) => {
  const { users: Allusers, loading, error, refetch: refetchUsers } = useGetAllUsers();
  const [UserTable, setUserTable] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDateAsc, setIsDateAsc] = useState(true);

  const { triggerNextStep, nextStepData, loading: nextStepLoading, error: nextStepError } = useNextStep();
  const { triggerRestart, restartData, loading: restartLoading, error: restartError } = useRestart();

  useEffect(() => {
    if (Allusers) {
      setUserTable(Allusers);
    }
  }, [Allusers]);

  // Refresh users after next phase or restart action completes
  useEffect(() => {
    if (nextStepData) {
      toast.success(nextStepData.Result?.message || "Next phase completed successfully!");
      refetchUsers(); // Refresh the users list
    }
    if (nextStepError) {
      toast.error(`Error in next phase: ${nextStepError.message || nextStepError}`);
    }
  }, [nextStepData, nextStepError, refetchUsers]);

  useEffect(() => {
    if (restartData) {
      toast.success(restartData.message || "User state restarted successfully!");
      refetchUsers(); // Refresh the users list
    }
    if (restartError) {
      toast.error(`Error restarting user: ${restartError.message || restartError}`);
    }
  }, [restartData, restartError, refetchUsers]);

  const handleDateSort = () => {
    setIsDateAsc(!isDateAsc);
    setUserTable(prevTable =>
      [...prevTable].sort((a, b) => {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return isDateAsc ? dateB - dateA : dateA - dateB;
      })
    );
  };

  const filteredUsers = UserTable.filter((user) => {
    const matchesRoles = selectedRoles.length === 0 || selectedRoles.includes(user.role);
    const matchesSearch = `${user.firstName} ${user.secondName}`.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRoles && matchesSearch;
  });

  const handleRoleChange = (role) => {
    const currentIndex = selectedRoles.indexOf(role);
    const newSelectedRoles = [...selectedRoles];

    if (currentIndex === -1) {
      newSelectedRoles.push(role);
    } else {
      newSelectedRoles.splice(currentIndex, 1);
    }

    setSelectedRoles(newSelectedRoles);
  };

  const handleRoleFilterClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the filter dropdown
  };

  const handleFilterClose = () => {
    setAnchorEl(null); // Close the filter dropdown
  };

  const handleNextPhaseClick = (userId) => {
    triggerNextStep(userId);
  };

  const handleRestartClick = (userId) => {
    triggerRestart(userId);
  };

  const getPhaseLabel = (phase) => {
    if (phase < 1) return "Baseline";
    if (phase === 1) return "Phase One";
    if (phase === 2) return "Phase Two";
    if (phase === 3) return "Phase Three";
    return "Unknown Phase";
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Box mb={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer component={Paper} style={{ backgroundColor: 'white', borderRadius: "14px", maxHeight: '90%', overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d3' }}>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>First Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Last Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Progress</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">
                <Box display="flex" alignItems="center" onClick={handleRoleFilterClick} style={{ cursor: 'pointer', display: "flex", justifyContent: "space-between" }}>
                  Role
                  <FilterListIcon fontSize="small" />
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleFilterClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {rolesOptions.map((role) => (
                    <MenuItem key={role.value} value={role.value} onClick={() => handleRoleChange(role.value)}>
                      <Checkbox checked={selectedRoles.includes(role.value)} />
                      <ListItemText primary={role.label} />
                    </MenuItem>
                  ))}
                </Menu>
              </TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Phase</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">
                <Box display="flex" alignItems="center" onClick={handleDateSort} style={{ cursor: 'pointer', display: "flex", justifyContent: "space-between" }}>
                  Submit Date
                  {isDateAsc ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowUpIcon fontSize="small" />}
                </Box>
              </TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">State</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user?.id}>
                <TableCell>{user?.firstName}</TableCell>
                <TableCell>{user?.secondName}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell align="center">
                  <Box position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={user.forms} />
                    <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                      <Typography variant="caption" component="div" color="textSecondary" sx={{ paddingTop: "3px" }}>
                        {`${user.forms.toString()}%`}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{user.role === "1" ? "Admin" : user.role === "2" ? "Intervention" : user.role === "3" ? "Control" : "Unknown"}</TableCell>
                <TableCell align="center">{getPhaseLabel(user.phase)}</TableCell>
                <TableCell>{user?.date}</TableCell>
                <TableCell>{user?.state}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => onSendEmail(user)} title="Send Email">
                    <EmailIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => onResetPassword(user)} title="Reset Password">
                    <LockResetIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDeleteUser(user)} title="Delete User">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="info" onClick={() => handleNextPhaseClick(user.id)} title="Next Phase">
                    <ArrowForwardIcon />
                  </IconButton>
                  <IconButton color="warning" onClick={() => handleRestartClick(user.id)} title="Restart State">
                    <RefreshIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
