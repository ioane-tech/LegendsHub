import styled from "styled-components";
import uploadIcon from "/icons/upload-icon.png";
import checkedIcon from "/icons/checked-icon.png";
import { ChangeEvent } from "react";

interface SchedulesCardProps {
  id: number;
  file: File | undefined;
  fileHandler: (file: File | undefined) => void;
  time: string;
  firstTeam: string;
  firstTeamWins: string;
  FirstTeamScore: string;
  secondTeam: string;
  secondTeamWins: string;
  secondTeamScore: string;
  blurHandler: (id: number) => void;
  blur: number | boolean;
}

const SchedulesCard: React.FC<SchedulesCardProps> = ({
  id,
  file,
  fileHandler,
  time,
  firstTeam,
  firstTeamWins,
  FirstTeamScore,
  secondTeam,
  secondTeamWins,
  secondTeamScore,
  blurHandler,
  blur,
}) => {
  const SchedulesCardsContainer = styled.div`
    .blur {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #161616e0;
      width: 100%;
      height: 100%;
      display: ${() => (blur === id || blur === false ? "none" : "block")};
    }
    background-color: ${() =>
      blur === id || blur === false ? "inherit" : "black"};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    transition: all 500ms ease;
    border-top: ${() =>
      blur === id || blur === false
        ? "1px solid #f18018"
        : "1px solid #161616e0"};
    position: relative;
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
        width: 70px;
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
      justify-content: center;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      .score {
        text-align: center;
        display: flex;
        font-size: 24px;
        font-family: "Roboto Slab", serif;
        font-weight: 500;
        gap: 5px;
        p {
          width: 30px;
        }
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
            width: 150px;
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

  return (
    <SchedulesCardsContainer>
      <div className="blur"></div>
      <div className="first-div">
        <h2>{time}</h2>
        <button>Vote</button>
      </div>
      <div className="second-div" onClick={() => blurHandler(id)}>
        <div className="second-div-first">
          <div className="for-teams" style={{ textAlign: "right" }}>
            <h2>{firstTeam}</h2>
            <p>{firstTeamWins}</p>
          </div>
          <div className="for-logo"></div>
        </div>
        <div className="score">
          <p>{FirstTeamScore}</p>:<p>{secondTeamScore}</p>
        </div>
        <div className="second-div-first">
          <div className="for-logo"></div>
          <div className="for-teams">
            <h2>{secondTeam}</h2>
            <p>{secondTeamWins}</p>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              fileHandler(e.target.files ? e.target.files[0] : undefined)
            }
          />
        </div>
        <h2 className="season">Season 1</h2>
      </div>
    </SchedulesCardsContainer>
  );
};

export default SchedulesCard;
