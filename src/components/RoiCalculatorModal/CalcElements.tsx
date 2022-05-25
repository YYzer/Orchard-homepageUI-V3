import styled from 'styled-components';
import { h2, h3, h4, p } from '../../globalStyles';
import { FaTimes, FaArrowDown } from 'react-icons/fa';
import { IoCalculator } from "react-icons/io5";
import { MdSwapVert } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed; 
  overflow: hidden;
  top: 0;
  right: 0.625rem;
  margin: 0 auto;
  backdrop-filter: blur(100px);
  z-index: 99;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background: linear-gradient(#d3d3d3, #d3d3d3) padding-box, linear-gradient(90deg, #27b0e6, #ff3838) border-box;
  border: 2px solid transparent;
  border-radius: 0.625rem;
  width: 500px;
  height: 525px;
  margin: auto;
  padding: 0.875rem;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SwapWrap = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: end;
`

export const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.625rem 0;
`

export const ButWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.25rem 0;
`

export const H2 = styled(h2)`
  color: #000;
  line-height: 0;
  ${h2};
`

export const H3 = styled(h3)`
  color: #000;
  line-height: 0;
  font-size: 1.125rem;
  ${h3};
`

export const H4 = styled(h4)`
  ${h4};
`

export const P = styled(p)`
  color: #000;
  font-size: 1rem;
  line-height: 0;
  margin-left: 0.625rem;
  ${p};
`

export const CalcIcon = styled(IoCalculator)`
  font-size: 1rem;
  padding-left: 0.15rem;
  color: #000;
`

export const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size: 1.25rem;
`;

export const SwapIcon = styled(MdSwapVert)`
  color: #000;
  font-size: 2.5rem;
  position: relative;
  top: 0.625rem;
`

export const ArrowIcon = styled(FaArrowDown)`
  font-size: 1.5rem;
  color: #000;
  padding: 0.5rem 0;
  margin: 0 auto;
`