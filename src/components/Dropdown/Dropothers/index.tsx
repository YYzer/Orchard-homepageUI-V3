import React, { useState } from 'react';
import { Data } from './Data'; 
import "../style.css";

const Dropothers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open); //open
  const handleClose = () => setOpen(false); //close

  return (
    <>
      <ul onClick={handleOpen} className={open ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {Data.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path} target="_blank" rel="noopener noreferrer" onClick={handleClose} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropothers;