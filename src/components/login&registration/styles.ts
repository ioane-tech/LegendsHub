import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 100vh;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
`;
export const Form = styled.div`
  margin-top: 20vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  button {
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    font-weight: 600;
    width: 468px;
    height: 54px;
    background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
    padding: 10px, 60px, 10px, 60px;
    border: none;
    gap: 9px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background: linear-gradient(to bottom, #ffbb00, #ffa600);
    }
    &:active {
      scale: 0.95;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 468px;
  height: 54px;
  padding-left: 20px;
  background-color: transparent;
  font-family: "Roboto Slab", serif;
  border: none;
  outline: none;
  font-weight: 800;
  font-family: inherit;
  outline: none;
  margin-top: 25px;
  color: white;
  border: 1px solid #f18018;
  &::placeholder {
    font-weight: 800;
    font-family: "Roboto Slab", serif;
    color: #5c4e41;
  }
  &:focus {
    border: 1px solid goldenrod;
  }
`;

export const Label = styled.label`
  color: white;
  position: absolute;
  top: -5px;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 60px;
  margin-top: -80px;
  margin-bottom: 30px;
  font-family: "Cormorant Unicase", serif;
`;

export const ErrorPara = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
  bottom: -20px;
  left: 23px;
`;

export const FlexStyled = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  span {
    color: rgba(92, 78, 65, 1);
    margin-right: 20px;
    font-size: 18px;
  }
  p {
    font-size: 18px;
    color: rgba(241, 128, 24, 1);

    cursor: pointer;
    transition: 0.3s;
    &:hover {
      scale: 1.1;
      transition: 0.3s;
      color: rgba(241, 160, 0, 1);
    }
  }
`;

export const LineContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  hr {
    width: 197px;
    border: none;
    height: 1px;
    border-top: 1px solid rgba(241, 128, 24, 1);
    margin: 20px 0;
  }
  p {
    font-size: 18px;
    color: white;

    margin-top: 8px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const BackdropFilter = styled.div`
  position: absolute;
  left: 0;
  width: 50vw;
  backdrop-filter: blur(8px);
  height: 100%;
  z-index: -1;
`;
