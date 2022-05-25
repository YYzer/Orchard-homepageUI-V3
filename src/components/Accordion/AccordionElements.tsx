import styled from 'styled-components';
import { h2, h3, p, Button2 } from '../../globalStyles';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { BsArrowUpRightSquare } from 'react-icons/bs';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  height: 200vh; //adjust when add more data
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1728px;
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 0.25fr;
  align-items: center;
  text-align: center;
  background: #dfdfdf;
  border-radius: 0.625rem;
  color: #fff;
  width: 90vw;
  height: auto;
  margin-left: auto;
  margin-right: auto; 
  margin-bottom: 0.625rem; //gap bet each wrap
  cursor: pointer;
`;
export const ImgWrap = styled.div`
  display: flex;
  padding-left: 1.5rem;
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputWrap = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.625rem;
  padding: 0.625rem 0;
  position: relative;
  top: -0.3125rem;
  transition: all 0.2s ease-in-out;
`

export const InputWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.625rem;
  position: relative;
  top: -0.3125rem;
  transition: all 0.2s ease-in-out;
`

export const Input = styled.input` //Input Field
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1.5px solid #808080;
  border-radius: 0.625rem;
  box-sizing: border-box; //equal size box
  color: #000;
  font-size: 1rem;
  padding: 0.875rem;
  width: 25vw;

  &:active {
    border: 1.5px solid #0467FB;
  }

  &:focus{
    border: 1.5px solid #0467FB;
    outline: none; //remove default blue border
  }
  
  &::placeholder {
    color: grey;
    opacity: 0.6;
    font-size: 1rem;
  }
`

export const H2 = styled(h2)`
  font-size: 1.25rem;
  padding-left: 1.25rem;
  color: #000;
  ${h2};
`

export const P = styled(p)`
  font-size: 1.125rem;
  line-height: 0;
  color: #000;
  ${p};
`

export const Img1 = styled.img`
  width: 40px;
  height: 40px;
`

export const Img2 = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  right: 0.625rem;
`

export const Button = styled.button` //Stake Button
  display: flex;
  justify-content: center;
  background: #0467FB;
  border-radius: 0.625rem;
  border: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 1rem;
  padding: 0.875rem;
  width: 25vw; 
  cursor: pointer;
  transition: all 0.3s ease-out;
`

export const ArrowDown = styled(RiArrowDownSFill)`
  font-size: 1.25rem;
  color: #000;
`

export const ArrowUp = styled(RiArrowUpSFill)`
  font-size: 1.25rem;
  color: #000;
`

// START OF DROPDOWN
export const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; //equal spacing between elements
  align-items: center;
  background: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 0.625rem;
  color: #d3d3d3;
  width: 90vw;
  height: auto;
  margin: auto;
  position: relative;
  bottom: 0.625rem; //No gap bet accordion & dropdown
`;

export const CardContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #0467FB; 
  border-radius: 0.625rem;
  color: #FFF;
  width: 23vw; 
  height: 14vh;
  margin: 0.5rem;
  padding: 0.875rem;

  @media screen and (max-width: 428px) {
    width: 28vw;
  }
`

export const TextButWrap = styled.div` //Harvest Button container
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
`

export const TextWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FooterWrapper = styled.div` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2.5rem;
  width: 100%;
  padding-top: 0.4rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    column-gap: 0.5rem;
  }
`

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterWrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardButton = styled(Button2)`
  display: flex;
  ${Button2};

  @media screen and (max-width: 1024px) {
    
  }
`

export const CardH2 = styled(h2)`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  ${h2};

  @media screen and (max-width: 428px) {
    font-size: 1rem;
  }
`

export const CardH3 = styled(h3)`
  color: #d3d3d3;
  font-weight: 500;
  margin: 0;
  padding-top: 0.25rem;
  ${h3};

  @media screen and (max-width: 428px) {
    font-size: 1rem;
  }
`

export const CardP = styled(p)`
  color: #d3d3d3;
  font-size: 0.95rem;
  margin: 0;
  padding-left: 0.4rem;
  ${p};

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`

export const ArrowUpRight = styled(BsArrowUpRightSquare)`
  font-size: 1.25rem;
  color: #d3d3d3;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`