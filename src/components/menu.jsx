import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Links from './links';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleMenu}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <IconButton onClick={toggleMenu}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        <Links orientation="vertical" />
      </List>
    </Drawer>
  );
};

export default Menu;