import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Dropearn from '../Dropdown/Dropearn';
import Droptrade from '../Dropdown/Droptrade';
import Dropothers from '../Dropdown/Dropothers';
import { IoMdSettings } from 'react-icons/io';
import logo from '../../assets/images/orchard.svg';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnWrap,
  NavBtn,
  SettingIcon,
  ArrowDown,
  ArrowUp,
  Ellipsis
} from './NavbarElements';

const Navbar = () => {
  const [earn, setEarn] = useState(false);
  const openEarn = () => setEarn(!earn); //open
  const closeEarn = () => setEarn(false); //close

  const [trade, setTrade] = useState(false);
  const openTrade = () => setTrade(!trade); 
  const closeTrade = () => setTrade(false); 

  const [ellipsis, setEllipsis] = useState(false);
  const openEllipsis = () => setEllipsis(!ellipsis); 
  const closeEllipsis = () => setEllipsis(false); 

  return (
    <Nav >
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} width={50} height={50} alt="" />
          Orchard
        </NavLogo> 
        <Sidebar /> 
        
        <NavMenu>
          <NavItem>
            <NavLink to='/sprout' smooth={true} duration={500}>
              Sprout
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={openEarn} onMouseLeave={closeEarn}>
            <NavLink to='/earn' smooth={true} duration={500}>
              Earn {earn ? <ArrowUp /> : <ArrowDown />}
            </NavLink>
            {earn && <Dropearn />}
          </NavItem>
        
          <NavItem onMouseEnter={openTrade} onMouseLeave={closeTrade}> 
            <NavLink to='/trade'> 
              Trade {trade ? <ArrowUp /> : <ArrowDown />}
            </NavLink>
            {trade && <Droptrade />}
          </NavItem>
        
          <NavItem>
            <NavLink to='/dashboard' smooth={true} duration={500}>
              Dashboard
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/analytics' smooth={true} duration={500}>
              Analytics
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={openEllipsis} onMouseLeave={closeEllipsis}>
            <NavLink to='others' smooth={true} duration={500}>
            {<Ellipsis />}
            </NavLink>
            {ellipsis && <Dropothers />}
          </NavItem>
 
          <NavBtnWrap>
            <NavBtn>
              Connect Wallet
            </NavBtn>
            <SettingIcon>
              <IoMdSettings />
            </SettingIcon>
          </NavBtnWrap>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
