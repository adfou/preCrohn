import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, CircularProgress, Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetAllUsers } from '../../../Hooks/index.mjs'; // Import the custom hook
 // Import your custom CSS file

const UserTable = ({ onSendEmail, onResetPassword, onDeleteUser }) => {
  const { users: Allusers, loading, error } = useGetAllUsers(); // Use the custom hook to fetch users
  const [UserTable, setUserTable] = useState([]);

  useEffect(() => {
    if (Allusers) {
      setUserTable(Allusers); // Set the UserTable state with fetched users
    }
  }, [Allusers]);

  if (loading) return <CircularProgress />; // Display a loader while data is being fetched
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>; // Display an error message if there is an error

  return (
    <>
      <TableContainer 
        component={Paper} 
        //className="custom-scrollbar"  // Apply the custom scrollbar class
        style={{ 
          backgroundColor: 'white', 
          borderRadius: "14px", 
          maxHeight: '70vh', 
          overflowY: 'auto' // Enables vertical scrolling
        }}
      >
        <Table stickyHeader> {/* stickyHeader keeps the header fixed while scrolling */}
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d3' }}>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>First Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Second Name</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Progress</TableCell>
              <TableCell sx={{ color: 'white', backgroundColor: '#1976d3' }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserTable && UserTable.map((user) => (
              <TableRow key={user?.id}>
                <TableCell>{user?.firstName}</TableCell>
                <TableCell>{user?.secondName}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell align="center">
                  <Box position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={user.progression} />
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
                      <Typography variant="caption" component="div" color="textSecondary">
                      {`${user.progression.toString()}%`}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
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
