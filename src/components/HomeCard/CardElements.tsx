import styled from 'styled-components';
import { h1, h3 } from '../../globalStyles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #000;
  max-width: 1728px;
  height: 1200px;

  @media screen and (max-width: 1024px) {
    height: 1050px;
  }
  
  @media screen and (max-width: 575px) {
    height: 2400px;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.875rem; //horizontal space bet cards
  margin: 0 auto; 
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgba(34,181,182,.5) 15%,rgba(40,12,134,.25) 85%);
  border-radius: 40px;
  width: 300px;
  height: 175px;
  padding: 1.25rem; //space between card and elements
  transition: all 0.2 ease-in-out;
  
  &:hover{
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 1024px) {
    transform: scale(0.9, 0.9);
  }

  @media screen and (max-width: 428px) {
    transform: scale(0.8, 0.8);
  }
`

export const CardIcon = styled.img`
  display: block; //remove white space under image
  width: 25%;
  height: 3.75rem;
  margin-bottom: 0.625rem;
`

export const CardH1 = styled(h1)`
  color: #fff;
  ${h1};
`

export const CardH3 = styled(h3)`
  color: #fff;
  text-align: center;
  font-weight: 500;
  ${h3};
`
