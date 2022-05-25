import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Data } from './Data'; 
import "../style.css";

const Droptrade = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open); //open
  const handleClose = () => setOpen(false); //close

  return (
    <>
      <ul onClick={handleOpen} className={open ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {Data.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={handleClose}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Droptrade;