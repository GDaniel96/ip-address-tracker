import styled from "styled-components";
import Image from "next/image";
import { useRef, useState } from "react";

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  height: 40px;
  border-radius: 10px 0 0 10px;
  border: none;
  outline-style: none;
  padding: 10px;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: black;
  height: 40px;
  width: 40px;
  border-radius: 0 10px 10px 0;
`;

const Form = () => {
  const [ip, setIp] = useState("");
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const convertInput = (e) => {
    let userInput = e.target.value;
    setIp(userInput);
    let testIp;
    let ipResult = [];

    for (let i = 0; i < userInput.length; i += 3) {
      ipResult.push(userInput.slice(i, i + 3));
      testIp = ipResult.join(".");
      if (testIp.length === 15) {
        setIp(testIp);
      }
    }
    // setIp(testIp);
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit} ref={formRef}>
        <FormInput
          type="text"
          name="ip-address"
          onChange={(e) => convertInput(e)}
          value={ip}
          maxLength={15}
        />
        <SubmitButton type="submit">
          <Image
            width={10}
            height={10}
            src="/icon-arrow.svg"
            alt="icon-arrow"
          />
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;
