import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.514);
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Input = styled.input`
  width: 330px;
  height: 50px;
  padding-left: 20px;
  background-color: white;
  font-weight: 800;
  font-family: inherit;
  outline: none;
  border-width: 2px;
  &::placeholder {
    font-weight: 800;
  }
  &:focus {
    border-bottom: 2px solid goldenrod;
  }
`;

export const Title = styled.h2`
  color: #c89b3c;
  font-size: 50px;
  margin-top: -80px;
  margin-bottom: 30px;
`;

export const ErrorPara = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
  bottom: -20px;
  left: 23px;
`;

export const FLexStyled = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 5px;
`;
