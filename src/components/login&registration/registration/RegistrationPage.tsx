import styled from "styled-components";
import { useForm } from "react-hook-form";
import LoginBg from "../LoginBg";
import GoldenButton from "../../../styled-components/golden-button";

type DataType = {
  gameName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DataType>();

  const password = watch("password", "");

  const onSubmit = () => {};

  return (
    <Container>
      <LoginBg />
      <div>
        <Title>Become a legend</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <Input
              type="text"
              placeholder="Enter Your Game Name..."
              {...register("gameName", {
                required: "Game Name cannot be empty",
                minLength: {
                  value: 3,
                  message: "Game Name must be at least 3 characters long",
                },
              })}
              style={
                errors.gameName?.message
                  ? { borderBottom: "2px solid red" }
                  : {}
              }
            />
            <Error>{errors.gameName?.message}</Error>
          </div>
          <div style={{ position: "relative" }}>
            <Input
              type="text"
              placeholder="Enter Your Name..."
              {...register("name", {
                required: "Name cannot be empty",
                pattern: {
                  value: /^[^\d]+$/,
                  message: "Name cannot contain numbers",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
              style={
                errors.name?.message ? { borderBottom: "2px solid red" } : {}
              }
            />
            <Error>{errors.name?.message}</Error>
          </div>
          <div style={{ position: "relative" }}>
            <Input
              type="email"
              placeholder="Enter Email..."
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Looks like this is not an email",
                },
              })}
              style={
                errors.email?.message ? { borderBottom: "2px solid red" } : {}
              }
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div style={{ position: "relative" }}>
            <Input
              type="password"
              placeholder="Enter Password..."
              {...register("password", {
                required: "Password cannot be empty",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              style={
                errors.password?.message
                  ? { borderBottom: "2px solid red" }
                  : {}
              }
            />
            <Error>{errors.password?.message}</Error>
          </div>
          <div style={{ position: "relative" }}>
            <Input
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              style={
                errors.confirmPassword?.message
                  ? { borderBottom: "2px solid red" }
                  : {}
              }
            />
            <Error>{errors.confirmPassword?.message}</Error>
          </div>
          <FLexStyled>
            <GoldenButton type="submit">Register</GoldenButton>
            <GoldenButton type="button">Already Have An Account?</GoldenButton>
          </FLexStyled>
        </FormContainer>
      </div>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.514);
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const Input = styled.input`
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
    border-bottom: 3px solid goldenrod;
  }
`;

const Title = styled.h2`
  color: #c89b3c;
  font-size: 50px;
  margin-top: -80px;
  margin-bottom: 30px;
`;

const Error = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
  bottom: -20px;
  left: 23px;
`;

const FLexStyled = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 5px;
`;
