import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Divider, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dashboard, subscriber, logout } from './Admin/menuItemn/dashboard';
import LogoutModal from '../Modal/LogOutModal'; // Import the modal
import { logout as logoutAction } from '../../store/slice/authSlice'; // Import the logout action

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const dispatch = useDispatch();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logoutAction()); // Dispatch the logout action
    setLogoutModalOpen(false);
    navigate('/login'); // Navigate to the login page
  };

  const handleLogoutCancel = () => {
    setLogoutModalOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
         

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className='side-bare-drawer'
      >
        

        
        <List sx={{ marginTop: "80px"}}>
          {/* Dashboard */}
          {dashboard.children.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={() => handleNavigate(item.url)}
              selected={isActive(item.url)} // Apply the selected style if the route is active
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#1976d3',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1565c0', // Lighter blue on hover
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}

          {/* Subscriber */}
          {subscriber.children.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={() => handleNavigate(item.url)}
              selected={isActive(item.url)} // Apply the selected style if the route is active
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#1976d3',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1565c0', // Lighter blue on hover
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}

          {/* Logout */}
          <ListItem button onClick={handleLogoutClick}>
            <ListItemIcon>
              <logout.icon />
            </ListItemIcon>
            <ListItemText primary={logout.title} />
          </ListItem>
        </List>
      </Drawer>

      {/* Logout Modal */}
      <LogoutModal
        open={logoutModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};

export default Sidebar;
