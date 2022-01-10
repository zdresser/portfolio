import React from "react";
import { DiFirebase, DiReact, DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>

    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React</ListParagraph>
          <ListParagraph>Redux</ListParagraph>
          <ListParagraph>Jest</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Node</ListParagraph>
          <ListParagraph>Express</ListParagraph>
          <ListParagraph>MongoDB</ListParagraph>
          <ListParagraph>PostgresSQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTypescript size='2.5rem' />
        </picture>
        <ListContainer>
          <ListTitle>Misc.</ListTitle>
          <ListParagraph>Typescript</ListParagraph>
          <ListParagraph>React Native</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
