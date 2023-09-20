import styled from "styled-components";
import { Subheading } from "../common/Subheading";
import { Paragraph } from "../common/Paragraph";

const Wrapper = styled.div``;

const Section = ({ title, paragraph }) => {
  return (
    <Wrapper>
      <Subheading>{title}</Subheading>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
};

export default Section;
