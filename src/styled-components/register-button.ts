import styled from "styled-components";

export const RegisterButton = styled.button`
  background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
  padding: 7px 40px;
  border: none;
  font-family: "Cormorant Unicase", serif;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 50px;
  &:hover {
    scale: 1.05;
    background: linear-gradient(to bottom, #ffbb00, #ffa600);
  }
  &:active {
    scale: 0.95;
  }
`;
