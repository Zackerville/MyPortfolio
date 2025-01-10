import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
<Div1>
    <Link href="/" legacyBehavior>
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
        <DiCssdeck size="3rem" />
        <span>MyPorfolio</span>
      </a>
    </Link>
</Div1>

  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>

  <Div3>
    <SocialIcons href="https://github.com/Zackerville">
      <AiFillGithub size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://www.linkedin.com/in/ti%E1%BA%BFn-ng%C3%B4-th%C3%A1i-minh-072519275/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://www.facebook.com/ngo.thai.minh.tien">
      <AiFillFacebook size="3rem" />
    </SocialIcons>
  </Div3>
</Container>

);

export default Header;
