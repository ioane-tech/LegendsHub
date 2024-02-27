import { useForm } from "react-hook-form";
import LoginBg from "../LoginBg";
import GoldenButton from "../../../styled-components/golden-button";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Title,
  FormContainer,
  FLexStyled,
  ErrorPara,
  Input,
  Container,
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
      <div>
        <Title>Login</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            <ErrorPara>{errors.email?.message}</ErrorPara>
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
            <ErrorPara>{errors.password?.message}</ErrorPara>
          </div>
          <FLexStyled>
            <GoldenButton
              type="button"
              onClick={() => {
                navigate("/registration");
              }}
            >
              register
            </GoldenButton>
            <GoldenButton type="submit">login</GoldenButton>
          </FLexStyled>
        </FormContainer>
      </div>
    </Container>
  );
};

export default LoginPage;
