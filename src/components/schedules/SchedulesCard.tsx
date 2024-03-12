import styled from "styled-components";
import uploadIcon from "/icons/upload-icon.png";
import checkedIcon from "/icons/checked-icon.png";
import { ChangeEvent, useState } from "react";

const SchedulesCard: React.FC = () => {
  const [file, setFile] = useState<File>();
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <SchedulesCardsContainer>
      <div className="first-div">
        <h2>20:00</h2>
        <button>Vote</button>
      </div>
      <div className="second-div">
        <div className="second-div-first">
          <div className="for-teams" style={{ textAlign: "right" }}>
            <h2>G2 Esports</h2>
            <p>4W-5L</p>
          </div>
          <div className="for-logo"></div>
        </div>
        <div className="score">
          <p>1</p>:<p>1</p>
        </div>
        <div className="second-div-first">
          <div className="for-logo"></div>
          <div className="for-teams">
            <h2>G2 Esports</h2>
            <p>4W-5L</p>
          </div>
        </div>
      </div>
      <div className="first-div">
        <div className="first-div-input">
          <label className="upload-label" htmlFor="file-upload">
            <img src={file ? checkedIcon : uploadIcon} />
            <span>{file ? "Added" : "Add photo"}</span>
          </label>
          <input
            id="file-upload"
            className="upload-input"
            type="file"
            onChange={fileHandler}
          />
        </div>
        <h2 className="season">Season 1</h2>
      </div>
    </SchedulesCardsContainer>
  );
};

export default SchedulesCard;

const SchedulesCardsContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 500ms ease;
  border-top: 1px solid #f18018;
  &:hover {
    background: black;
  }
  .first-div {
    display: flex;
    align-items: center;
    gap: 30px;
    font-family: "Roboto Slab", serif;
    .season {
      font-weight: 400;
      font-size: 16px;
      color: #c6c6c6;
    }
    h2 {
      font-size: 24px;
      font-weight: 500;
    }
    button {
      border: 1px solid #f08018;
      background-color: inherit;
      color: #f18018;
      padding: 5px 20px;
      font-family: inherit;
      font-weight: 400;
      font-size: 16px;
    }
    .first-div-input {
      .upload-label {
        border: 1px solid #f18018;
        display: flex;
        align-items: center;
        width: 110px;
        padding: 2px;
        gap: 10px;
        cursor: pointer;
        span {
          font-size: 12px;
          color: #f08018;
        }
      }
      .upload-input {
        display: none;
      }
    }
  }
  .second-div {
    display: flex;
    align-items: center;
    gap: 20px;
    .score {
      display: flex;
      font-size: 24px;
      font-family: "Roboto Slab", serif;
      font-weight: 500;
      gap: 5px;
    }
    .second-div-first {
      display: flex;
      align-items: center;
      gap: 10px;
      .for-teams {
        h2 {
          font-family: "Cormorant Unicase", serif;
          font-size: 24px;
          font-weight: 500;
        }
        p {
          font-family: "Roboto Slab", serif;
          font-size: 12px;
          font-weight: 400;
          color: #c6c6c6;
        }
      }
      .for-logo {
        width: 40px;
        height: 40px;
        background-color: #888888;
        border: 1px solid #ff7a00;
        border-radius: 50%;
      }
    }
  }
`;
