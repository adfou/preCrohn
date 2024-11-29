import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  CircularProgress, Box, Typography, Menu, MenuItem, Checkbox, ListItemText, TextField, InputAdornment, Chip, useMediaQuery
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useGetAllUsers, useRestart, useNextStep } from '../../../Hooks/index.mjs';
import { toast } from 'react-hot-toast';

const rolesOptions = [
  { value: "1", label: "Admin" },
  { value: "2", label: "Intervention" },
  { value: "3", label: "Control" }
];

const UserTable = ({ onSendEmail, onResetPassword, onDeleteUser, RefreshTable }) => {
  const { users: Allusers, loading, error, refetch: refetchUsers } = useGetAllUsers();
  const [UserTable, setUserTable] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDateAsc, setIsDateAsc] = useState(true);

  const isMobile = useMediaQuery('(max-width:600px)');

  const { triggerNextStep, nextStepData, loading: nextStepLoading, error: nextStepError } = useNextStep();
  const { triggerRestart, restartData, loading: restartLoading, error: restartError } = useRestart();

  useEffect(() => {
    if (Allusers) {
      setUserTable(Allusers);
    }
  }, [Allusers]);

  useEffect(() => {
    if (nextStepData && nextStepData.Result !== null) {
      toast.success(nextStepData.Result?.message || "Next phase completed successfully!");
      refetchUsers();
    }
  }, [nextStepData, refetchUsers]);

  useEffect(() => {
    if (nextStepError) {
      toast.error(`Error ${nextStepError.message || nextStepError}`);
    }
  }, [nextStepError]);

  useEffect(() => {
    if (restartData) {
      toast.success(restartData.message || "User state restarted successfully!");
      refetchUsers();
    }
  }, [restartData, restartError, refetchUsers]);

  useEffect(() => {
    if (restartError) {
      toast.error(`Error restarting user: ${restartError.message || restartError}`);
    }
  }, [restartError]);

  useEffect(() => {
    refetchUsers();
  }, [RefreshTable]);

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
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleNextPhaseClick = (userId) => {
    triggerNextStep(userId);
  };

  const handleRestartClick = (userId) => {
    triggerRestart(userId);
  };

  const handleMenuClick = (event, user) => {
    setSelectedUser(user);
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setSelectedUser(null);
    setMenuAnchorEl(null);
  };

  const iconColor = "primary";

  if (loading) return <CircularProgress />;
  if (error) {
    console.log("error:",error)
    return <div>Error: Network error occurred </div>;}

  return (
    <>
      <Box mb={2} px={isMobile ? 1 : 0}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth={isMobile}
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
            <TableRow>
              {isMobile ? (
                <>
                  <TableCell>Full Name</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </>
              ) : (
                <>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="center">Progress</TableCell>
                  <TableCell align="center">Role</TableCell>
                  <TableCell align="center">Phase</TableCell>
                  <TableCell align="center">Submit Date</TableCell>
                  <TableCell align="center">Due Date</TableCell>
                  <TableCell align="center">Biomarkers</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user?.id}>
                {isMobile ? (
                  <>
                    <TableCell>{`${user?.firstName} ${user?.secondName}`}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={(e) => handleMenuClick(e, user)} title="More Actions">
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={menuAnchorEl}
                        open={Boolean(menuAnchorEl && selectedUser?.id === user.id)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => { onSendEmail(user); handleMenuClose(); }}>
                          <EmailIcon sx={{ mr: 1, color: iconColor }} color="primary" /> Send Email
                        </MenuItem>
                        <MenuItem onClick={() => { onResetPassword(user); handleMenuClose(); }}>
                          <LockResetIcon sx={{ mr: 1, color: iconColor }} color="secondary" /> Reset Password
                        </MenuItem>
                        <MenuItem onClick={() => { handleNextPhaseClick(user.id); handleMenuClose(); }}>
                          <ArrowForwardIcon sx={{ mr: 1, color: iconColor }} color="warning" /> Next Phase
                        </MenuItem>
                        <MenuItem onClick={() => { handleRestartClick(user.id); handleMenuClose(); }}>
                          <RefreshIcon sx={{ mr: 1, color: iconColor }} color="error" /> Reset Progress
                        </MenuItem>
                        <MenuItem onClick={() => { onDeleteUser(user); handleMenuClose(); }}>
                          <DeleteIcon sx={{ mr: 1, color: iconColor }} color="error" /> Delete User
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </>
                ) : (
                  <>
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
                    <TableCell align="center">{user.phase === 0 ? "Baseline" : user.phase === 1 ? "Phase One" : user.phase === 2 ? "Phase Two" : user.phase === 3 ? "Phase Three" : ""}</TableCell>
                    <TableCell>{user?.date}</TableCell>
                    <TableCell>{user?.due_date}</TableCell>
                    <TableCell>{user?.userObject?.biomarkers === "yes" ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <Chip
                        label={user?.stateStr}
                        color={user?.stateStr === "Closed" ? "error" : "success"}
                        variant="outlined"
                        sx={{ fontWeight: 700, minWidth: "70px", minHeight: "20px", display: "flex", fontSize: "14px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={(e) => handleMenuClick(e, user)} title="More Actions">
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={menuAnchorEl}
                        open={Boolean(menuAnchorEl && selectedUser?.id === user.id)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => { onSendEmail(user); handleMenuClose(); }}>
                          <EmailIcon sx={{ mr: 1, color: iconColor }} color="primary" /> Send Email
                        </MenuItem>
                        <MenuItem onClick={() => { onResetPassword(user); handleMenuClose(); }}>
                          <LockResetIcon sx={{ mr: 1, color: iconColor }} color="secondary" /> Reset Password
                        </MenuItem>
                        <MenuItem onClick={() => { handleNextPhaseClick(user.id); handleMenuClose(); }}>
                          <ArrowForwardIcon sx={{ mr: 1, color: iconColor }} color="warning" /> Next Phase
                        </MenuItem>
                        <MenuItem onClick={() => { handleRestartClick(user.id); handleMenuClose(); }}>
                          <RefreshIcon sx={{ mr: 1, color: iconColor }} color="error" /> Reset Progress
                        </MenuItem>
                        <MenuItem onClick={() => { onDeleteUser(user); handleMenuClose(); }}>
                          <DeleteIcon sx={{ mr: 1, color: iconColor }} color="error" /> Delete User
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
