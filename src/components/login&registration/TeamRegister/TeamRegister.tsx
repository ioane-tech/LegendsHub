import { useForm } from "react-hook-form";

import GoldenButton from "../../../styled-components/golden-button";
import { NavLink } from "react-router-dom";

import {
  Title,
  FormContainer,
  ErrorPara,
  Input,
  Container,
  BackdropFilter,
  Form,
} from "../styles";
import LoginBg from "../LoginBg";

type DataType = {
  teamName: string;
  teamSlogan: string;
  teamLogo: string;
};

function TeamRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};

  return (
    <>
      <LoginBg />
      <Container>
        <BackdropFilter></BackdropFilter>
        <Form>
          <NavLink
            to="/"
            style={{ position: "absolute", left: "5%", top: "40px" }}
          >
            <GoldenButton>back</GoldenButton>
          </NavLink>
          <div>
            <Title>Create team</Title>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <div style={{ position: "relative" }}>
                <input
                  type="file"
                  placeholder="upload img..."
                  {...register("teamLogo", {
                    required: "Logo is required",
                  })}
                  style={{
                    width: "330px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <ErrorPara>{errors.teamLogo?.message}</ErrorPara>
              </div>

              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  placeholder="Team name..."
                  {...register("teamName", {
                    required: "Team Name cannot be empty",
                    minLength: {
                      value: 3,
                      message: "Game Name must be at least 3 characters long",
                    },
                  })}
                  style={
                    errors.teamName?.message ? { border: "1px solid red" } : {}
                  }
                />
                <ErrorPara>{errors.teamName?.message}</ErrorPara>
              </div>

              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  placeholder="Team slogan..."
                  {...register("teamSlogan", {
                    required: "Slogan cannot be empty",
                  })}
                  style={
                    errors.teamSlogan?.message
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                <ErrorPara>{errors.teamSlogan?.message}</ErrorPara>
              </div>

              <button type="submit">Create</button>
            </FormContainer>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default TeamRegister;
