import styled from 'styled-components';
import { h2, p, Button2 } from '../../../globalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100%;
  max-width: 1728px;
  height: 250px;
  position: relative;

  @media screen and (max-width: 428px) {
    height: 400px;
  }
`

export const CardWrap = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3; 
  width: 70%;
  height: auto;
  margin: auto; 
  border-radius: 1.25rem;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 428px) {
    flex-direction: column;
    width: 95%;
  }
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.875rem;
  height: 140px;
  width: 500px;
  margin: 1.25rem;
  padding: 1.25rem;
  transition: all 0.3s ease;
`

export const CardWrap2 = styled.div`//CardContainer
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #0046ff;
  border-radius: 0.875rem;
  width: 350px;
  height: 130px;
  margin: 1.25rem; //bet 2 cards
  padding: 0.875rem; //bet card & elements
  transition: all 0.3s ease;

  @media screen and (max-width: 1024px) {
    width: 450px;
    height: 140px;
  }

  @media screen and (max-width: 428px) {
    width: 300px;
  }
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between; //button and text
  align-items: center;
  width: 100%;
  margin: auto;
`

export const TextWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;  
  position: relative;
  left: 2rem;
`

export const Button = styled(Button2)`
  ${Button2};
`

export const H2 = styled(h2)`
  color: #000;
  margin: 0;
  padding-bottom: 0.625rem;
  ${h2};

  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`

export const P = styled(p)`
  color: #000;
  font-size: 1.25rem;
  margin: 0;
  padding: 0.625rem 0;
  ${p};
`

export const CardH2 = styled(h2)`
  color: #fff;
  margin: 0;
  padding-bottom: 0.625rem;
  ${h2};
`

export const CardP = styled(p)`
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  padding: 0.625rem 0;
  ${p};
`