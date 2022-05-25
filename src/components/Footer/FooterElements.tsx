import styled from 'styled-components';
import { AiOutlineCopyright } from "react-icons/ai";

export const FooterContainer = styled.footer`
  background-color: #000; 
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  max-width: 1728px;
  padding-top: 3.125rem;
`

export const SocialMediaWrap = styled.div`
  display: flex;          
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1728px;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`
export const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 1.125rem;
  column-gap: 0.625rem;
  cursor: pointer;
  
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15.625rem;
`

export const SocialIconLink = styled.a`
  color: #FFF;
  font-size: 1.5rem;
  cursor: pointer;
`

export const CopyrightWrap = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
  color: #FFF;
  margin-bottom: 1rem;
  opacity: 0.7;
`

export const CopyrightIcon = styled(AiOutlineCopyright)`
  font-size: 1rem;
  padding-right: 0.15rem;
`
