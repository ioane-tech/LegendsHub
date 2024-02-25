import { useState } from "react";
import styled from "styled-components";

import LoginBg from "./LoginBg";
import GoldenButton from "../../styled-components/golden-button";

function LoginPage() {
  const [password, setPassword] = useState<string | null>("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");

  console.log(email);
  return (
    <div>
      <LoginBg />
      <div
        style={{
          height: "100vh",
          width: "500px",
          marginLeft: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <FormContainer>
          <Title>Become a legend</Title>
          <Inputs
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your name..."
          />
          <Inputs
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email..."
          />
          <Inputs
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password..."
          />
          <Inputs
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password..."
          />
          {confirmPassword != "" && confirmPassword != password && (
            <Error>Password does not match!</Error>
          )}
          <GoldenButton>Sumbit</GoldenButton>
        </FormContainer>
      </div>
    </div>
  );
}

export default LoginPage;

const FormContainer = styled.div`
  padding-top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Inputs = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const Title = styled.h2`
  color: #c89b3c;
  font-size: 50px;
  margin-top: -80px;
  padding-bottom: 70px;
`;

const Error = styled.p`
  color: red;
  margin-bottom: 10px;
`;
