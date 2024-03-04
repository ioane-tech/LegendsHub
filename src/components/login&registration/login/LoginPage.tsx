import { useForm } from "react-hook-form";
import LoginBg from "../LoginBg";
import GoldenButton from "../../../styled-components/golden-button";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Title,
  FormContainer,
  FlexStyled,
  ErrorPara,
  Input,
  Container,
  InputWrapper,
  Label,
  LineContainer,
  Form,
} from "../styles";

type DataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};

  const navigate = useNavigate();
  return (
    <Container>
      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>
      <LoginBg />
      <Form>
        <Title>Login</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
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
            <ErrorPara>{errors.email?.message}</ErrorPara>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
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
            <ErrorPara>{errors.password?.message}</ErrorPara>
          </InputWrapper>
          <button type="submit">Login</button>

          <LineContainer>
            <hr />
            <p>Or</p>
            <hr />
          </LineContainer>

          <FlexStyled>
            <span>Don`t have any account?</span>
            <p
              onClick={() => {
                navigate("/registration");
              }}
            >
              Register
            </p>
          </FlexStyled>
        </FormContainer>
      </Form>
    </Container>
  );
};

export default LoginPage;
