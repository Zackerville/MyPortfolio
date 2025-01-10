import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 091-5646-340">091-5646-340</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tien.ngozack2004@hcmut.edu.vn">tien.ngozack2004@hcmut.edu.vn</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never stop upgrading myself</Slogan>
        </CompanyContainer>

            <SocialIcons href="https://github.com/Zackerville">
              <AiFillGithub size="3rem" />
            </SocialIcons>
        
            <SocialIcons href="https://www.linkedin.com/in/ti%E1%BA%BFn-ng%C3%B4-th%C3%A1i-minh-072519275/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
        
            {/* <SocialIcons href="https://www.facebook.com/ngo.thai.minh.tien">
              <AiFillFacebook size="3rem" />
            </SocialIcons> */}
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
