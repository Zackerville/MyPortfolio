import React from 'react';
import { DiAndroid, DiAtom, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      As a programmer who is eager to learn about different technologies, I always try to improve myself to know more about programming tools and languages, below are the tools that I have used to develop projects.

    </SectionText>

    <List>
    <ListItem>
        <DiAtom size="3rem" />
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <ListParagraph>
            C++ <br />
            Python <br />
            JavaScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML <br />
            CSS <br />
            JavaScript <br />
            React <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Django <br />
            SQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>AL/ML</ListTitle>
          <ListParagraph>
            Sklearn <br />
            PyTorch <br />
            Keras <br/>
            NLTK <br />
            And some other library for data processing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
