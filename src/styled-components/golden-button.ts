import styled from "styled-components";

const GoldenButton = styled.button`
  font-family: "Marcellus SC", serif;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
  font-family: "Cormorant Unicase", serif;
  letter-spacing: 1px;
  padding: 5px 15px;
  background: inherit;
  /* color: #cdbe91; */
  color:white;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom,rgba(240, 128, 24, 1), rgba(241, 224, 133, 1));
  border-image-slice: 1;
  border-width: 2px;
  transition: 0.3s;
  &:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
  }
  &:active {
    text-shadow: none;
    box-shadow: none;
    color: #cdbe9130;
  }
`;

export default GoldenButton;
