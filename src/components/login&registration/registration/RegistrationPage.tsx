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
  gameName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DataType>();

  const password = watch("password", "");

  const onSubmit = () => {};

  const navigate = useNavigate();

  return (
    <Container>
      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>
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
            <ErrorPara>{errors.gameName?.message}</ErrorPara>
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
            <ErrorPara>{errors.name?.message}</ErrorPara>
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
            <ErrorPara>{errors.confirmPassword?.message}</ErrorPara>
          </div>
          <FLexStyled>
            <GoldenButton
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already Have An Account?
            </GoldenButton>
            <GoldenButton type="submit">Register</GoldenButton>
          </FLexStyled>
        </FormContainer>
      </div>
    </Container>
  );
}

export default RegistrationPage;
