import styled from "styled-components";

const GoldenButton = styled.button`
  font-family: "Marcellus SC", serif;
  text-transform: capitalize;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  &:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #1e2328, #433d2b);
    transition: 0.1s;
    cursor: url(../assets/section1/hand2.png), auto;
    cursor: pointer;
  }
`;

export default GoldenButton;
