import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  primary?: any;
  big?: any;
  dark?: any;
  fontBig?: any;
  exact?: string;
}

export const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0; // Remove white space
    padding: 0;
    font-family:'Nunito', sans-serif; 
    overflow-x: hidden;
  }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1728px;
    margin: 0 auto;
    padding: 0px 25px;
    z-index: 1;
`;

export const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5ac4be; 
  border: none;
  border-radius: 1.875rem;
  color: #FFF;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  padding: ${({big}) => (big ? '15px 40px' : '10px 25px')};
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;  

export const Button2 = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d3d3d3;
  padding: 0.625rem 1.25rem;
  border: 1.5px solid transparent;
  border-radius: 10px;
  background: linear-gradient(#191970, #191970) padding-box, linear-gradient(90deg, #27b0e6, #ff3838) border-box;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

export const Button3 = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 0.625rem;
  color: #000;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover{
    background: linear-gradient(#d3d3d3, #d3d3d3) padding-box, linear-gradient(90deg, #27b0e6, #ff3838) border-box;
  }
`

export const Button4 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgba(34,181,182,.6) 15%,rgba(40,12,134,.7) 85%); 
  border: none;
  border-radius: 0.625rem;
  color: #FFF;
  font-size: 1rem;
  padding: 0.625rem 1.25rem;
  width: 300px;
  height: 60px;
  cursor: pointer;

  &:hover{
    border: 3px solid #82d4dc;
  }
`

export const h1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const h2 = styled.h2`
  font-size: 1.5rem;
  text-align: left;
`;

export const h3 = styled.h3`
  font-size: 1.25rem;
  text-align: left;
`;

export const h4 = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: #000;
  line-height: 0;
`;

export const p = styled.p`
  font-size: 1rem;
  text-align: left;
`

export default GlobalStyle;