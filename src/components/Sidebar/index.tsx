import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { SidebarData } from './Data';
import SubMenu from './SubMenu';


const SidebarContainer = styled.div<{open: boolean}>`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #000;
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-100%')}; //open sidebar from right
  z-index: 10; 
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 428px) {
    bottom: 3.125rem;
  }
`;

const IconWrap = styled(Link)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 0;
    margin-right: 1.25rem;
    font-size: 1.875rem;
    outline: none;
    z-index: 15;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; 
  padding-top: 2.5rem;
`;

const SidebarButton = styled(Button)`
  background: linear-gradient(90deg,#22b5b680,#280c8699);
  width: 10rem;
  padding: 0.875rem 1.25rem;
  ${Button};
`;

const OpenIcon = styled(FaBars)`
  color: #fff;
  font-size: 1.25rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.25rem;
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false); //open is false
  const toggle = () => setOpen(!open); //update state to true, show sidebar

  return (
    <>
      <IconWrap to='#' > 
        {open ?<CloseIcon onClick={toggle} /> : <OpenIcon onClick={toggle} />}
      </IconWrap>
      <SidebarContainer open={open}>
        <SidebarMenu>
          {SidebarData.map((item, index) => { //return navbar items
            return <SubMenu item={item} key={index} />; //pass item as argument
          })}
          <SideBtnWrap>
            <SidebarButton><Link to="/connect"></Link>Connect Wallet</SidebarButton>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;