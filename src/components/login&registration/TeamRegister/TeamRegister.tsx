import { useForm } from "react-hook-form";
import GoldenButton from "../../../styled-components/golden-button";
import { NavLink } from "react-router-dom";

import BgVideo from "../../../styled-components/bgVideo";

import animatedOrnn from "/assets/animatedOrnn.webm";

import {
  Title,
  FormContainer,
  FLexStyled,
  ErrorPara,
  Input,
  Container,
} from "../styles";

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
    <Container>
      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>
      <BgVideo src={animatedOrnn} autoPlay muted loop />
      <div>
        <Title>Create team</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <input
              type="file"
              placeholder="upload img..."
              {...register("teamLogo", {
                required: "Password is required",
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
                errors.teamName?.message
                  ? { borderBottom: "2px solid red" }
                  : {}
              }
            />
            <ErrorPara>{errors.teamName?.message}</ErrorPara>
          </div>

          <div style={{ position: "relative" }}>
            <Input
              type="text"
              placeholder="Team slogan..."
              {...register("teamSlogan", {
                required: "slogan cannot be empty",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Looks like this is not an email",
                },
              })}
              style={
                errors.teamSlogan?.message
                  ? { borderBottom: "2px solid red" }
                  : {}
              }
            />
            <ErrorPara>{errors.teamSlogan?.message}</ErrorPara>
          </div>

          <FLexStyled>
            <GoldenButton type="submit">Create</GoldenButton>
          </FLexStyled>
        </FormContainer>
      </div>
    </Container>
  );
}

export default TeamRegister;
