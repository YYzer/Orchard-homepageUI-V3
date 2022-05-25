import React, {useState} from 'react';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const Popup = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const text=`APR refers to the interest earned on your deposits for 1 year. 
  It is variable as is dependent on daily trading activity, price of deposited assets, 
  price of rewards and current reward rates.`

  return (
    <Tooltip title={text} placement="left" arrow open={open} onOpen={handleClick} onClose={handleClose} >
      <HelpIcon sx={{fontSize: 15, px: 0.5, color:"#000"}}  />
    </Tooltip>
  )
};

export default Popup;