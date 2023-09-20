import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";

const HeroContainer = styled.div`
  background-image: url("/pattern-bg-desktop.png");
  background-size: fill;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
`;

const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
