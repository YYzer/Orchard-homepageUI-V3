import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { IoEllipsisHorizontal } from 'react-icons/io5';

interface Props {
  smooth?: boolean;
  duration?: number;
  title?: string;
  path?: string;
  item?: any;
  index?: number;
  onClick?: () => void;
}

export const Nav = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  background: #000; 
  font-size: 1.25rem; 
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled(Container)<Props>`
  display: flex;
  justify-content: space-between; 
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)` 
  display: flex;
  justify-self: start;
  align-items: center;
  color: #FFF;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.625rem;
  column-gap: 1rem;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 428px) {
    margin-left: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  list-style: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li` //adjust dropdown
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 5rem; //same height as navbar
  transition: 0.3s all ease-in-out;

  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;

export const NavLink = styled(Link)<Props>`
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0 1.25rem;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color:  #fff; 
  }
`;

export const NavBtnWrap = styled.div` //button and setting icon container
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 10rem; 
  gap: 0.625rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 1280px) { 
    left: 6.25rem; 
  }

  @media screen and (max-width: 1024px) { 
    display: none;
  }
`;

export const NavBtn = styled(Button)`
  background: linear-gradient(90deg,#22b5b680,#280c8699);
  width: 10rem;
  height: 2.5rem;
  font-size: 1.125rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  ${Button};
`;

export const SettingIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.875rem;
  color: #FFF;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const ArrowDown = styled(FaCaretDown)`
  font-size: 0.875rem;
  padding-left: 0.25rem;
`;

export const ArrowUp = styled(FaCaretUp)`
  font-size: 0.875rem;
  padding-left: 0.25rem;
`;

export const Ellipsis = styled(IoEllipsisHorizontal)`
  font-size: 0.875rem;
  padding-left: 0.25rem;
`;
