import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>

    <SectionText>
    Hello, my name is Ngo Thai Minh Tien, also known as Zackerville, but feel free to call me Zack. I’m currently a junior majoring in Computer Science at Ho Chi Minh City University of Technology (HCMUT). My journey into programming began when I entered university, and it has been an incredible experience ever since. I’m deeply passionate about technology, coding, and exploring new advancements in the field of Computer Science, with a particular focus on Full-Stack Development and AI/ML Engineering. This portfolio is a reflection of my skills and dedication, entirely developed by me. Thank you for taking the time to visit my website! Don’t hesitate to reach out to me.
    </SectionText>

    <SectionDivider />
  </Section>
);

export default Timeline;