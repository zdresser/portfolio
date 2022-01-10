import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Zach Dresser
          <br />
          Full-Stack Web Developer
        </SectionTitle>
        <SectionText>
          I am a junior web developer working primarily in the MERN stack.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
