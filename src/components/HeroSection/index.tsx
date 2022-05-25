import React, {FC} from 'react';
import Video from '../../assets/videos/video.mp4';
import logo from '../../assets/images/sprout.svg';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  TextWrap,
  HeroH1,
  HeroH2,
  HeroP,
} from './HeroElements';

interface HeroProps {
  type?: string
}
const HeroSection: FC<HeroProps> = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH2>TVL 4,008,695$</HeroH2>
        <TextWrap>
          <img src={logo} width={30} height={30} alt="" /><HeroP>Sprout Token</HeroP>
          <HeroP>Price: 0.04$</HeroP>
          <HeroP>Market Cap: 1745,518$</HeroP>
        </TextWrap>
        <HeroH1>An Easy Way To Access and Earn With Crypto</HeroH1>
        <HeroP>Put your crypto index fund to work and let it yield passive rewards for you!</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
