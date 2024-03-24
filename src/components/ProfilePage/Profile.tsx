import { NavLink } from "react-router-dom";
import LoginBg from "../login&registration/LoginBg";
import GoldenButton from "../../styled-components/golden-button";
import CLanLogo from "/icons/borderPlayer.png";
import PlayerIconTop from "/assets/icon-position-top.png";
import PlayerIconMid from "/lanes/position_mid.png";
import PlayerIconJungle from "/lanes/position_jungle.png";
import PlayerIconBot from "/lanes/position_bottom.png";
import PlayerIconSup from "/lanes/position_support.png";

import styled from "styled-components";
import { useState } from "react";

function Profile() {
  const [createTeamActive, setCreateTeamActive] = useState(false);

  return (
    <div>
      <LoginBg />

      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>

      <ProfileContainer>
        <NotificationIcon src="./assets/notification.png" alt="" />
        <NotificationDot src="./assets/notificationDot.png" alt="" />

        <ProfileSection>
          <img src="./assets/profileImgBorder.png" alt="" />
          <h3>Ingame Name</h3>
        </ProfileSection>
        {createTeamActive == false ? (
          <CreateTeamButton onClick={() => setCreateTeamActive(true)}>
            Create Team
          </CreateTeamButton>
        ) : (
          <>
            <Container>
              <div>
                <img src={CLanLogo} alt="" width={200} />
              </div>
              <h2>
                <p>Crew Name</p>
              </h2>
              <ul>
                <li>
                  <img src={PlayerIconTop} width={30} alt="" />
                  <div>
                    <p>Top lane</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconMid} width={30} alt="" />
                  <div>
                    <p>Mid lane</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconJungle} width={30} alt="" />
                  <div>
                    <p>Jungle</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconBot} width={30} alt="" />
                  <div>
                    <p>Bot lane</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>support</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  <img src="./assets/addIcon.png" />
                </li>
              </ul>
            </Container>
          </>
        )}
      </ProfileContainer>
    </div>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: 144px;

  width: 600px;
  /* height:522px; */

  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.6);
`;
const NotificationIcon = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;

  cursor: pointer;
`;
const NotificationDot = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;

  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50px;
  width: 100%;
  font-size: 24px;
  color: white;

  img {
    width: 150px;
    height: 150px;
  }
`;

const CreateTeamButton = styled.button`
  margin-top: 360px;
  margin-bottom: 100px;

  width: 361px;
  height: 60px;
  background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
  padding: 7px 40px;
  border: none;
  font-family: "Cormorant Unicase", serif;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.05;
    background: linear-gradient(to bottom, #ffbb00, #ffa600);
  }
  &:active {
    scale: 0.95;
  }
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  margin-top: 260px;
  margin-bottom: -180px;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 5px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      div {
        display: flex;
        align-items: center;
        border: 1px solid rgba(241, 128, 24, 0.5);
        width: 180px;
        height: 30px;
        p {
          color: rgba(200, 170, 110, 1);
          margin-left: 10px;
        }
      }
      img {
        cursor: pointer;
        &:hover {
          scale: 1.2;
        }
      }
    }
  }
  h2 {
    margin-top: -20px;
    margin-bottom: 20px;
  }
`;
