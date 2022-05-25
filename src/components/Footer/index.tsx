import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../../components/Divider';
import logo from '../../assets/images/orchard.svg';
import { FaDiscord, FaTwitter, FaTelegramPlane, FaGithub, FaYoutube, FaMediumM } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  LogoWrap,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink, 
  CopyrightWrap, 
  CopyrightIcon
} from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
        <FooterWrap>
          <SocialMediaWrap>
            <Link to="/" style={{textDecoration: 'none'}}>
            <LogoWrap>
              <img src={logo} width={30} height={30} alt=""/>
              Orchard
            </LogoWrap>
            </Link>
            <SocialIcons>
              <SocialIconLink href="https://discord.com/channels/953321210110939199/953321210710720594" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconLink>

              <SocialIconLink href="https://twitter.com/Orchardfindex" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                <FaTelegramPlane />
              </SocialIconLink>

              <SocialIconLink href="https://github.com/Orchardfindex" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink href="https://www.youtube.com/watch?v=kVou8QNABxE" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="https://medium.com/@orchardfindex" target="_blank" aria-label="Medium">
                <FaMediumM />
              </SocialIconLink>
            </SocialIcons> 
          </SocialMediaWrap>
            <Divider />
            <CopyrightWrap>
              <CopyrightIcon />
              2022 Orchard. All Rights Reserved.
            </CopyrightWrap>
          </FooterWrap>
      </FooterContainer>
  );
};

export default Footer;
