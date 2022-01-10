import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

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

        <Link href='/contact'>
          <Button>Contact me!</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
