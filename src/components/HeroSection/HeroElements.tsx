import styled from 'styled-components';

interface Props {
  type: any
}

export const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #09093a;
  height: 600px;
  position: relative;
`

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video<Props>`
  width: 100%;
  height: auto; //responsive
  -o-object-fit: cover; 
  object-fit: cover; //fit to container maintain aspect ratio
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  padding: 0 5rem;
  max-width: 600px; 
`

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3.125rem;
  line-height: 3rem;
  text-align: left;
  word-break: break-word;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 428px) {
    font-size: 2rem;
  }
`

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 2.25rem;
  line-height: 0;
  text-align: left;
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  margin-right: 1.5rem;
  margin-left: 0.4rem;
 
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 428px) {
    font-size: 1.25rem;
  }
`