import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginBg from "../login&registration/LoginBg";
import GoldenButton from "../../styled-components/golden-button";
import CLanLogo from "/icons/borderPlayer.png";
import PlayerIconTop from "/assets/icon-position-top.png";
import PlayerIconMid from "/lanes/position_mid.png";
import PlayerIconJungle from "/lanes/position_jungle.png";
import PlayerIconBot from "/lanes/position_bottom.png";
import PlayerIconSup from "/lanes/position_support.png";
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { removeAccessToken } from "../../context/AuthService";
import { getAccessToken } from "../../context/AuthService";
import { CloseOutlined } from "@ant-design/icons";
import lissProfile from "/notifications/lissandra.png";
import { Modal, Badge } from "antd";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";
import { toast } from "react-toastify";

type InvitationTypes = {
  id: number;
  sender: number;
  receiver: number;
  team: number;
  role: string;
  status: string;
};

type NotificationTypes = {
  id: number;
  user: string;
  message: string;
  created_at: string;
};
function Profile() {
  const [modalHandler, setModalHandler] = useState<boolean>(false);
  const [idInput, setIdInput] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [invitData, setInvitData] = useState<InvitationTypes[]>([]);
  const [notificationsData, setNotificationsData] = useState<
    NotificationTypes[]
  >([]);

  // test test test
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  // test test test

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

  const { userInfo, team, token, setTeam, setToken, setUserInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await axios.post(
      "/logout/",
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    removeAccessToken();
    setToken(null);
    setTeam(undefined);
    setUserInfo(null);
    navigate("/");
  };

  const teamMembers = team?.members;

  const rolePlayerFinder = (role: string) => {
    return teamMembers?.find((member) => member.role === role);
  };

  const sendInvitationHandler = () => {
    if (selectedRole && team) {
      const sendInvitation = async () => {
        if (!team || !selectedRole) return;

        try {
          const response = await axios.post(
            "/api/invitation/",
            {
              receiver: idInput,
              team: team.id,
              role: selectedRole,
              status: "Pending",
            },
            {
              headers: {
                Authorization: `Token ${getAccessToken()}`,
              },
            }
          );
          if (response.status === 201) {
            toast.success("Invitation sent successfully");
          } else {
            toast.error("Unexpected error occurred while sending invitation");
          }
          setIdInput(null);
        } catch (error) {
          toast.error("Something wrong, try again!");
        }
      };

      sendInvitation();
    }
  };

  // open/close modal
  const profileModalHandler = (role: string) => {
    setModalHandler((value) => !value);
    if (role.length > 0) {
      setSelectedRole(role);
    }
  };

  // api  get request for invitations
  useEffect(() => {
    const getInvitation = async () => {
      try {
        const invitResp = await axios.get(`/api/invitation/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setInvitData(invitResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInvitation();
  }, []);

  // patch request for invitations to change pending state to accepted/declined

  const handleAccept = async (invs: InvitationTypes) => {
    try {
      await axios.patch(
        `/api/invitation/${invs.id}/`,
        {
          receiver: invs.receiver,
          role: invs.role,
          team: invs.team,
          status: "Accepted",
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleDecline = async (invs: InvitationTypes) => {
    try {
      await axios.patch(
        `/api/invitation/${invs.id}/`,
        {
          receiver: invs.receiver,
          role: invs.role,
          team: invs.team,
          status: "Declined",
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  // notification data
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const notificationResponse = await axios.get(`/api/notification/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setNotificationsData(notificationResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotifications();
  }, []);
  const inviteHandler = team?.creator === userInfo?.id;
  const formatNotificationDate = (createdAt: string): string => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffMs = now.getTime() - createdDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h`;
    } else {
      return `${diffDays}d`;
    }
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
        {/* notification Container */}
        <NotificationContainer onClick={showModal}>
          <Badge count={notificationsData.length} offset={[-28, 29]}>
            <NotificationIcon src="./assets/notification.png" alt="notif" />
          </Badge>
        </NotificationContainer>

        <ProfileSection>
          <img src="./assets/profileImgBorder.png" alt="" />
          <h3>{userInfo?.in_game_name}</h3>
          <h4>{userInfo?.full_name}</h4>
          <h5>id: {userInfo?.id}</h5>
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
                    <p>
                      {rolePlayerFinder("Top lane")?.in_game_name || "Top lane"}
                    </p>
                  </div>
                  {inviteHandler && !rolePlayerFinder("Top lane") && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Top lane")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconMid} width={30} alt="" />
                  <div>
                    <p>
                      {rolePlayerFinder("Mid lane")?.in_game_name || "Mid lane"}
                    </p>
                  </div>
                  {inviteHandler && !rolePlayerFinder("Mid lane") && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Mid lane")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconJungle} width={30} alt="" />
                  <div>
                    <p>
                      {rolePlayerFinder("Jungle")?.in_game_name || "Jungle"}
                    </p>
                  </div>
                  {inviteHandler && !rolePlayerFinder("Jungle") && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Jungle")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconBot} width={30} alt="" />
                  <div>
                    <p>
                      {rolePlayerFinder("Bot lane")?.in_game_name || "Bot lane"}
                    </p>
                  </div>
                  {inviteHandler && !rolePlayerFinder("Bot lane") && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Bot lane")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>
                      {rolePlayerFinder("Support")?.in_game_name || "Support"}
                    </p>
                  </div>
                  {inviteHandler && !rolePlayerFinder("Support") && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Support")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  {inviteHandler && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Sub player 1")}
                    />
                  )}
                </li>
                <li>
                  <img src={PlayerIconSup} width={30} alt="" />
                  <div>
                    <p>Sub</p>
                  </div>
                  {inviteHandler && (
                    <img
                      src="./assets/addIcon.png"
                      onClick={() => profileModalHandler("Sub player 2")}
                    />
                  )}
                </li>
              </ul>
            </Container>
          </>
        )}
      </ProfileContainer>
      {modalHandler && (
        <ProfileModal>
          <div
            className="wrapper"
            onClick={() => profileModalHandler("")}
          ></div>
          <div className="modal-content">
            <div className="for-close">
              <CloseOutlined
                onClick={() => profileModalHandler("")}
                className="profileModal_closer"
              />
            </div>
            <input
              type="number"
              className="for-id"
              placeholder="write the id"
              onChange={(e) => {
                setIdInput(e.target.value);
              }}
            />
            <GoldenButton
              onClick={sendInvitationHandler}
              style={{ marginLeft: "110px", marginBottom: "50px" }}
            >
              Send
            </GoldenButton>
          </div>
        </ProfileModal>
      )}

      <Modal
        title={
          <div
            style={{
              width: "100%",
              cursor: "move",
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Notifications
          </div>
        }
        open={open}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        {invitData?.map((invs: InvitationTypes) =>
          userInfo?.id === invs.receiver ? (
            <div key={invs.id}>
              {invs.status === "Pending" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <InvitationCard>
                      <div className="invitationCard-text">
                        <h1>You have been invited in {invs.role}</h1>
                      </div>
                      <div className="invitationCard-buttons">
                        <button
                          className="btn-accept"
                          onClick={() => handleAccept(invs)}
                        >
                          Accept
                        </button>
                        <button
                          className="btn-decline"
                          onClick={() => handleDecline(invs)}
                        >
                          Decline
                        </button>
                      </div>
                    </InvitationCard>
                  </div>
                </>
              )}
            </div>
          ) : null
        )}
        {/* notifications */}
        {notificationsData.map((notifs: NotificationTypes) => {
          return (
            <NotificationBox key={notifs.id}>
              <div className="notification-wrapper">
                <img src={lissProfile} alt="profile-pic" />
                <span className="notif-message">{notifs.message}</span>
                <span className="notif-date">
                  {formatNotificationDate(notifs.created_at)}
                </span>
              </div>
            </NotificationBox>
          );
        })}
      </Modal>
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
    border: none;
    &:hover {
      background: linear-gradient(to bottom, #ffbb00, #ffa600);
    }
  }
  .invit-modal {
    margin-bottom: 25px;
  }
`;

const NotificationIcon = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

const NotificationContainer = styled.div`
  position: absolute;
  right: 30px;
  top: -5px;
  cursor: pointer;
  z-index: 55;
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
  h5 {
    color: #c5c3c3;
    text-transform: lowercase;
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
          text-transform: capitalize;
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content {
    width: 300px;
    background: rgba(0, 0, 0, 0.95);
    z-index: 150;
    color: #fff;
    border-radius: 5%;
    position: relative;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .for-close {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .for-id {
    margin-left: 60px;
    margin-top: 50px;
    margin-bottom: 30px;
    height: 30px;
    border: none;
    font-size: 20px;
    width: 180px;
    text-align: center;
    offset: none;
    background-color: #9e9c9c;

    &::placeholder {
      text-transform: lowercase;
      font-family: "Cormorant Unicase", serif;
      color: #333333;
    }
    &:focus {
      background-color: #ffffff;

      border: 1px red solid;
      outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
      margin: 0 !important;
      display: none !important;
    }
  }
`;

const NotificationBox = styled.div`
  background: rgba(208, 208, 208, 0.49);

  .notification-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 20px;
    gap: 10px;
    .notif-message {
      font-family: "Roboto Slab", serif;
      font-weight: 400 !important;
      font-size: 16px;
      line-height: 21.1px;
      color: #000000;
    }
    .notif-date {
      font-family: "Roboto Slab", serif;
      font-weight: 400 !important;
      font-size: 16px;
      color: #cacaca;
    }
  }
`;

const InvitationCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  gap: 10px;
  width: 100%;
  .invitationCard-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .invitationCard-text h1 {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.1px;
    text-align: left;
  }

  .invitationCard-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;

    align-items: center;
    .btn-accept {
      padding: 5px 25px;
      font-family: "Cormorant Unicase", serif;
      font-weight: 700;
      color: #000;
      cursor: pointer;
      font-size: 18px;
      background: transparent;
      border-radius: 6px;
      border: 2px solid #f08018;
      border-image: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
      border-image-slice: 1;
    }
    .btn-decline {
      background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
      padding: 5px 25px;
      font-family: "Cormorant Unicase", serif;
      font-weight: 700;
      color: #000;
      cursor: pointer;
      font-size: 18px;
      border-radius: 6px;
    }
  }
`;
