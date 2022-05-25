import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const CircularIcon = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10)); //increment by 10 for 500ms
      }, 500); 
  
      return () => {
        clearInterval(timer);
      };
    }, []); //dependency array
    
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: 750,
        background: 'black',
        m: "auto",
      }}>
        <CircularProgress variant="determinate" value={progress} size={40} />
      </Box>
    )
}

export default CircularIcon;