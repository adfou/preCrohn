import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Collapse, Toolbar, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { dashboard, subscriber, logout } from './Admin/menuItemn/dashboard';
import LogoutModal from '../Modal/LogOutModal'; // Import the modal

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [openItem, setOpenItem] = useState({});
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleToggle = (id) => {
    setOpenItem((prevOpenItem) => ({
      ...prevOpenItem,
      [id]: !prevOpenItem[id],
    }));
  };

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutModalOpen(false);
    // Add your logout logic here, e.g., clearing tokens, etc.
    navigate('/login');
  };

  const handleLogoutCancel = () => {
    setLogoutModalOpen(false);
  };

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
      >
        <Toolbar>
          <IconButton onClick={onClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {/* Dashboard */}
          {dashboard.children.map((item) => (
            <ListItem button key={item.id} onClick={() => handleNavigate(item.url)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}

          {/* Subscriber */}
          {subscriber.children.map((item) => (
            <ListItem button key={item.id} onClick={() => handleNavigate(item.url)}>
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
