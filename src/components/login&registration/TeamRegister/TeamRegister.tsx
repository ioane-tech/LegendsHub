import { useForm } from "react-hook-form";
import GoldenButton from "../../../styled-components/golden-button";
import { NavLink } from "react-router-dom";
import uploadIcon from "/icons/upload-icon.png";
import checkedIcon from "/icons/checked-icon.png";
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
import styled from "styled-components";
import { ChangeEvent, useState } from "react";

type DataType = {
  teamName: string;
  teamLogo: string;
};

function TeamRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};

  const UploadWrapper = styled.div`
    text-align: left;
    position: relative;
    .upload-label {
      border: 1px solid #f18018;
      display: flex;
      align-items: center;
      width: 210px;
      padding: 10px;
      gap: 10px;
      cursor: pointer;
      span {
        font-size: 14px;
        color: #f08018;
      }
    }
    .upload-input {
      display: none;
    }
  `;

  const [file, setFile] = useState<File>();
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

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
              {/* /////////////////////////////////////////////////////////////////////////// */}

              <div className="select">
                <div
                  className="selected"
                  data-one="Top lane"
                  data-two="Mid lane"
                  data-three="Jungle"
                  data-four="Bot lane"
                  data-five="Support"
                ></div>
                <div className="options">
                  <div title="option-1">
                    <input id="option-1" name="option" type="radio" />
                    <label
                      className="option"
                      htmlFor="option-1"
                      data-txt="Top lane"
                    ></label>
                  </div>
                  <div title="option-2">
                    <input id="option-2" name="option" type="radio" />
                    <label
                      className="option"
                      htmlFor="option-2"
                      data-txt="Mid lane"
                    ></label>
                  </div>
                  <div title="option-3">
                    <input id="option-3" name="option" type="radio" />
                    <label
                      className="option"
                      htmlFor="option-3"
                      data-txt="Jungle"
                    ></label>
                  </div>
                  <div title="option-4">
                    <input id="option-4" name="option" type="radio" />
                    <label
                      className="option"
                      htmlFor="option-4"
                      data-txt="Bot lane"
                    ></label>
                  </div>
                  <div title="option-5">
                    <input id="option-5" name="option" type="radio" />
                    <label
                      className="option"
                      htmlFor="option-5"
                      data-txt="Support"
                    ></label>
                  </div>
                </div>
              </div>

              {/* /////////////////////////////////////////////////////////////////////////// */}
              <UploadWrapper>
                <label className="upload-label" htmlFor="file-upload">
                  <img src={file ? checkedIcon : uploadIcon} />
                  <span>{file ? file.name : "Choose your team logo"}</span>
                </label>
                <input
                  id="file-upload"
                  className="upload-input"
                  type="file"
                  {...register("teamLogo", {
                    required: "Logo is required",
                  })}
                  onChange={fileHandler}
                />
                <ErrorPara>{errors.teamLogo?.message}</ErrorPara>
              </UploadWrapper>
              <button type="submit">Create</button>
            </FormContainer>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default TeamRegister;
