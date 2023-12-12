import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { amber, blue, purple } from '@mui/material/colors';

const CustomizedButtons = ({ children, disabled, type, onClick, width, hojre, height, sx }) => {

  const colorButton = {
    color: 'white',
    fontWeight: 'bold',
    background: 'radial-gradient(circle, rgba(158,26,176,1) 32%, rgba(55,55,182,1) 63%, rgba(255,211,0,1) 100%)',
    '&:hover': {
      background: amber[700],
    },
    height,
    width,
    mr: hojre,
    mb: 1,
    mt: 1,
    boxShadow: `5px 5px 8px blue`
  };

  return (
    <div>
      <Button variant="contained" sx={colorButton} type={type} disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
export default CustomizedButtons;