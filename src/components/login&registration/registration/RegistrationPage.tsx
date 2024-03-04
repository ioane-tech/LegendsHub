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
  LineContainer,
  Form,
  Label,
  BackdropFilter,
} from "../styles";

type DataType = {
  gameName: string;
  fullName: string;
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
      <LoginBg />
      <BackdropFilter></BackdropFilter>
      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>
      <Form>
        <Title>Become a legend</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <Label htmlFor="gameName">Your game name</Label>
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
                errors.gameName?.message ? { border: "1px solid red" } : {}
              }
            />
            <ErrorPara>{errors.gameName?.message}</ErrorPara>
          </div>
          <div style={{ position: "relative" }}>
            <Label htmlFor="name">Full name</Label>
            <Input
              type="text"
              placeholder="Enter Your Name..."
              {...register("fullName", {
                required: "Full Name cannot be empty",
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
                errors.fullName?.message ? { border: "1px solid red" } : {}
              }
            />
            <ErrorPara>{errors.fullName?.message}</ErrorPara>
          </div>
          <div style={{ position: "relative" }}>
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
              style={errors.email?.message ? { border: "1px solid red" } : {}}
            />
            <ErrorPara>{errors.email?.message}</ErrorPara>
          </div>
          <div style={{ position: "relative" }}>
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
                errors.password?.message ? { border: "1px solid red" } : {}
              }
            />
            <ErrorPara>{errors.password?.message}</ErrorPara>
          </div>
          <div style={{ position: "relative" }}>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              style={
                errors.confirmPassword?.message
                  ? { border: "1px solid red" }
                  : {}
              }
            />
            <ErrorPara>{errors.confirmPassword?.message}</ErrorPara>
          </div>
          <button type="submit">Register</button>

          <LineContainer>
            <hr />
            <p>Or</p>
            <hr />
          </LineContainer>

          <FlexStyled>
            <span>Already Have An Account?</span>
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </p>
          </FlexStyled>
        </FormContainer>
      </Form>
    </Container>
  );
}

export default RegistrationPage;
