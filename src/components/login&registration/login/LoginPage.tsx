import { useForm } from "react-hook-form";
import LoginBg from "../LoginBg";
import GoldenButton from "../../../styled-components/golden-button";
import { NavLink, useNavigate } from "react-router-dom";
import unvisible from "/icons/unvisible.png";
import visibleImg from "/icons/visible.png";
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
  BackdropFilter,
} from "../styles";
import { useState } from "react";
import axios from "../../../api/axios";
import { setAccessToken } from "../../../context/AuthService";
import { AxiosError } from "axios";

type DataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DataType>();

  const email = watch("email");
  const password = watch("password");

  const [backError, setBackError] = useState<string | null>(null);
  const onSubmit = async () => {
    try {
      const response = await axios.post("/login/", {
        username: email,
        password: password,
      });
      const accessToken = response?.data?.token;
      console.log(response.data);
      setAccessToken(accessToken);
      navigate("/profile");
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 401) {
        setBackError("Not authorized or ");
      }
    }
  };
  const [visible, setVisible] = useState(true);
  const visibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <LoginBg />
      <BackdropFilter></BackdropFilter>
      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>
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
              style={errors.email?.message ? { border: "1px solid red" } : {}}
            />
            <ErrorPara>{errors.email?.message}</ErrorPara>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type={visible ? "password" : "text"}
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
            <img
              className="hidden"
              src={visible ? unvisible : visibleImg}
              onClick={() => visibleHandler()}
            />
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
        <h2>{backError}</h2>
      </Form>
    </Container>
  );
};

export default LoginPage;
