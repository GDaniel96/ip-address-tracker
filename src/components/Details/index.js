import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 20px;
  bottom: 200px;
  background-color: gray;
  width: 250px;
`;

const Details = () => {
  return (
    <Wrapper>
      <Section title={"test title"} paragraph={"this is a test paragrahp"} />
      <Section title={"test title"} paragraph={"this is a test paragrahp"} />
      <Section title={"test title"} paragraph={"this is a test paragrahp"} />
    </Wrapper>
  );
};

export default Details;
