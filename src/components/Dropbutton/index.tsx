import React, { useState, MouseEvent} from 'react';
import styled from 'styled-components';
import { Button3 } from '../../globalStyles';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const DropContainer = styled.div`
  display: flex;
  width: 10vw;
  height: 7.5vh; 
  position: relative;
  z-index: 10;
`

const DropMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
  position: absolute;
  top: 110%;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0.625rem;
  box-sizing: border-box; //dropmenu and button equal width
`

const DropItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.125rem;
  width: 100%;
  padding: 0.625rem;  
  list-style: none;
  cursor: pointer;

  &:hover{
    background: #0467FB;
    color: #fff;
  }
`

const Button = styled(Button3)`
  ${Button3};
`

export const ArrowDown = styled(RiArrowDownSFill)`
  font-size: 1.125rem;
  color: #000;
`

export const ArrowUp = styled(RiArrowUpSFill)`
  font-size: 1.125rem;
  color: #000;
`

const DropButton = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open); //open 
  const untoggle = () => setOpen(false); //close when click item

  const handleClick = (e: MouseEvent<HTMLUListElement>) => { //restrict to unordered list
    e.preventDefault(); 
    setOpen(false); //close when click outside
  }

  return (
    <DropContainer>
        <Button onClick={toggle}>
          Hot
          {open ? <ArrowUp /> : <ArrowDown />}
        </Button>
        {open && <DropMenu onClick={untoggle} onMouseLeave={handleClick}>
          <DropItem>APR</DropItem>
          <DropItem>Multiplier</DropItem>
          <DropItem>Liquidity</DropItem>
          <DropItem>Latest</DropItem>
         </DropMenu>}
    </DropContainer>
  )
};

export default DropButton;