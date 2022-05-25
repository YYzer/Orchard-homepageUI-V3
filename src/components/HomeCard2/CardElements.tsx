import styled from 'styled-components';
import { h1, h2, h3, p, Button } from '../../globalStyles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    margin-top: 1.5rem;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.875rem;
  max-width: 1728px;
  margin: 2rem auto; 

  @media screen and (max-width: 1024px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }
`

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgba(34,181,182,.5) 15%,rgba(40,12,134,.25) 85%);
  background-blend-mode: darken;
  border-radius: 40px;
  width: 225px;
  height: 350px;
  padding: 1.25rem;
  transition: all 0.2 ease-in-out;
  
  &:hover{
    border: 4px solid #5ac4be;
    transform: scale(1.1);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 1024px) {
    width: 175px;
    height: 300px;
    transform: scale(0.9, 0.9);
  }

  @media screen and (max-width: 428px) {
    width: 140px;
  }
`

export const CardIcon = styled.img`
  display: block; 
  width: 50%;
  height: 5rem;
  margin-bottom: 0.625rem;
`

export const CardH1 = styled(h1)`
  color: #fff;
  line-height: 0;
  ${h1};

  @media screen and (max-width: 428px) {
    line-height: 3rem;
  }
`

export const CardH2 = styled(h2)`
  color: #fff;
  text-align: left;
  line-height: 0;
  ${h2};
`

export const CardH3 = styled(h3)`
  color: #fff;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  ${h3};
`
export const CardP = styled(p)`
  color: #fff;
  line-height: 1.25rem;
  ${p};
`

export const CardButton = styled(Button)`
  margin-top: 1.25rem;
  ${Button};
`
