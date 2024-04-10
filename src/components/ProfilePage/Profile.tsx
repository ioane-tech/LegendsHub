import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginBg from "../login&registration/LoginBg";
import GoldenButton from "../../styled-components/golden-button";
import CLanLogo from "/icons/borderPlayer.png";
import PlayerIconTop from "/assets/icon-position-top.png";
import PlayerIconMid from "/lanes/position_mid.png";
import PlayerIconJungle from "/lanes/position_jungle.png";
import PlayerIconBot from "/lanes/position_bottom.png";
import PlayerIconSup from "/lanes/position_support.png";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import Select from "react-select";
import { removeAccessToken } from "../../context/AuthService";

function Profile() {
  const [allUsers, setAllUsers] = useState<userType[]>([]);
  const [modalHandler, setModalHandler] = useState<boolean>(false);
  const [, setSelectedUser] = useState<userType | null>(null);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const responseOfTeam = await axios.get("/api/teams/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setTeam(responseOfTeam.data[0]);
      };
      getUser();
    }
  }, []);

  useEffect(() => {
    const getAllUsers = async () => {
      const responseOfAllUsers = await axios.get("/api/users_list/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setAllUsers(responseOfAllUsers.data);
    };
    getAllUsers();
  }, []);

  // open/close modal
  const profileModalHandler = () => {
    setModalHandler((value) => !value);
  };

  const handleUserSelect = (selectedOption: any) => {
    setSelectedUser(selectedOption);
  };

  const { userInfo, team, token, setTeam, setToken, setUserInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    // await axios.post(
    //   "/logout/",
    //   {},
    //   {
    //     headers: {
    //       Auhthorization: `Token ${token}`,
    //     },
    //   }
    // );
    removeAccessToken();
    setToken(null);
    setTeam(undefined);
    setUserInfo(null);
    navigate("/");
  };

  return (
    <div>
      <LoginBg />

      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>

      <ProfileContainer>
        <button className="logout" onClick={() => logoutHandler()}>
          log out
        </button>
        <NotificationIcon src="./assets/notification.png" alt="" />
        <NotificationDot src="./assets/notificationDot.png" alt="" />

        <ProfileSection>
          <img src="./assets/profileImgBorder.png" alt="" />
          <h3>{userInfo?.in_game_name}</h3>
          <h4>{userInfo?.full_name}</h4>
        </ProfileSection>
        {!team ? (
          <Link to={"/teamRegister"}>
            <CreateTeamButton>Create Team</CreateTeamButton>
          </Link>
        ) : (
          <>
            <Container>
              <div>
                <img src={CLanLogo} alt="" width={200} />
              </div>
              <h2>
                <p className="team-name">{team.name}</p>
              </h2>
              <ul>
                <li>
                  <img src={PlayerIconTop} width={30} alt="" />
                  <div>
                    <p>Top lane</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconMid} width={30} alt="" />
                  <div>
                    <p>Mid lane</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconJungle} width={30} alt="" />
                  <div>
                    <p>Jungle</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconBot} width={30} alt="" />
                  <div>
                    <p>Bot lane</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>support</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  <img
                    src="./assets/addIcon.png"
                    onClick={profileModalHandler}
                  />
                </li>
              </ul>
            </Container>
          </>
        )}
      </ProfileContainer>
      {modalHandler && (
        <ProfileModal>
          <CloseOutlined
            onClick={profileModalHandler}
            className="profileModal_closer"
          />
          <div>
            <Select
              options={allUsers.map((user) => ({
                value: user.id,
                label: user.in_game_name,
              }))}
              onChange={handleUserSelect}
              placeholder="Select User"
              styles={customStyles}
            />
          </div>
          <GoldenButton style={{ marginLeft: "110px", marginBottom: "50px" }}>
            Send
          </GoldenButton>
        </ProfileModal>
      )}
    </div>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 144px;
  width: 600px;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.6);
  .logout {
    background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
    cursor: pointer;
    font-family: "Cormorant Unicase", serif;
    text-transform: capitalize;
    font-size: 20px;
    padding: 10px 20px;
    position: absolute;
    top: 30px;
    left: 30px;
    font-weight: 900;
    z-index: 1;
    &:hover {
      background: linear-gradient(to bottom, #ffbb00, #ffa600);
    }
  }
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
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  width: 100%;
  font-size: 24px;
  color: white;
  font-family: "Cormorant Unicase", serif;
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
  .team-name {
    text-transform: capitalize;
  }
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
          font-family: "Roboto Slab", serif;
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
  p {
    font-family: "Cormorant Unicase", serif;
  }
`;

const ProfileModal = styled.div`
  position: fixed;
  width: 20%;

  background: rgba(0, 0, 0, 0.9);
  z-index: 150;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  .profileModal_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
`;

/////////////////////////styles for select element
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f04318" : "white",
    color: state.isSelected ? "white" : "black",
    ":hover": {
      backgroundColor: state.isSelected ? "#f04318" : "#fb8b6f",
      color: "white",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: "5px  20px 50px 20px",
    width: "270px",
  }),

  control: (provided: any, state: any) => ({
    ...provided,
    width: "270px",
    margin: "50px 20px 50px 20px",
    backgroundColor: "#f2f2f2",
    border: state.isFocused ? "2px solid #f04318" : "2px solid #ccc",
    borderRadius: "5px",
    boxShadow: state.isFocused ? "0 0 3px rgba(240, 67, 24, 0.5)" : "none",
    "&:hover": {
      borderColor: "#f04318",
    },
  }),
};
