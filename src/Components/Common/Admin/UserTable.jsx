import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, CircularProgress, Box, Typography, FormControl, Menu, MenuItem, Checkbox, ListItemText, TextField, InputAdornment } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetAllUsers } from '../../../Hooks/index.mjs'; // Import the custom hook

const rolesOptions = [
  { value: "1", label: "Admin" },
  { value: "2", label: "Intervention" },
  { value: "3", label: "Control" }
];

const UserTable = ({ onSendEmail, onResetPassword, onDeleteUser }) => {
  const { users: Allusers, loading, error } = useGetAllUsers(); // Use the custom hook to fetch users
  const [UserTable, setUserTable] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]); // State to store selected roles
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for the filter dropdown
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  useEffect(() => {
    console.log("Allusers:",Allusers)
    if (Allusers) {
      setUserTable(Allusers); // Set the UserTable state with fetched users
    }
  }, [Allusers]);

  // Filter the user table based on selected roles and search query
  const filteredUsers = UserTable.filter((user) => {
    const matchesRoles = selectedRoles.length === 0 || selectedRoles.includes(user.role); // Filter by roles
    const matchesSearch = `${user.firstName} ${user.secondName}`.toLowerCase().includes(searchQuery.toLowerCase()); // Filter by search query
    return matchesRoles && matchesSearch; // Return true if user matches both filters
  });

  const handleRoleChange = (role) => {
    const currentIndex = selectedRoles.indexOf(role);
    const newSelectedRoles = [...selectedRoles];

    if (currentIndex === -1) {
      newSelectedRoles.push(role); // Add the role if it's not selected
    } else {
      newSelectedRoles.splice(currentIndex, 1); // Remove the role if it's already selected
    }

    setSelectedRoles(newSelectedRoles); // Update selected roles
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the filter dropdown
  };

  const handleFilterClose = () => {
    setAnchorEl(null); // Close the filter dropdown
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  if (loading) return <CircularProgress />; // Display a loader while data is being fetched
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>; // Display an error message if there is an error

  return (
    <>
      {/* Add the search bar here */}
      <Box mb={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer 
        component={Paper} 
        style={{ 
          backgroundColor: 'white', 
          borderRadius: "14px", 
          maxHeight: '70vh', 
          overflowY: 'auto' 
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d3' }}>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>First Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Second Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Progress</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">
                Role
                <IconButton 
                  onClick={handleFilterClick} 
                  sx={{ color: 'white', marginLeft: 1 }}
                  size="small"
                  aria-controls="role-filter-menu"
                  aria-haspopup="true"
                >
                  <FilterListIcon />
                </IconButton>

                {/* Role Filter Dropdown Menu */}
                <Menu
                  id="role-filter-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleFilterClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  {rolesOptions.map((role) => (
                    <MenuItem key={role.value} value={role.value} onClick={() => handleRoleChange(role.value)}>
                      <Checkbox checked={selectedRoles.indexOf(role.value) > -1} />
                      <ListItemText primary={role.label} />
                    </MenuItem>
                  ))}
                </Menu>
              </TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Submit Date</TableCell>
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
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography variant="caption" component="div" color="textSecondary" sx={{ paddingTop: "3px" }}>
                        {`${user.forms.toString()}%`}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  {user?.role === "1"
                    ? "Admin"
                    : user?.role === "2"
                    ? "Intervention"
                    : user?.role === "3"
                    ? "Control"
                    : "Unknown"}
                </TableCell>
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
