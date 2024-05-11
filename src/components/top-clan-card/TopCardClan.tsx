import styled from "styled-components";
import CLanLogo from "/icons/borderPlayer.png";
import PlayerIconTop from "/assets/icon-position-top.png";
import PlayerIconMid from "/lanes/position_mid.png";
import PlayerIconJungle from "/lanes/position_jungle.png";
import PlayerIconBot from "/lanes/position_bottom.png";
import PlayerIconSup from "/lanes/position_support.png";

type Props = {
  members: teamMember[];
  name: string;
};

const TopCardClan = ({ members, name }: Props) => {
  const positionMember = (position: string) => {
    return members.find((member) => member.role === position);
  };

  return (
    <Container>
      <VideoContainer>
        <video autoPlay muted loop>
          <source src={"/assets/teaminformationbaner.webm"} />
        </video>
      </VideoContainer>
      <h2>{name}</h2>
      <div className="clan-img-cont">
        <img src={CLanLogo} alt="" width={200} className="clan-border" />
        <img src="/assets/clan.png" alt="clan logo" className="clan-logo" />
      </div>
      <ul>
        <li>
          <img src={PlayerIconTop} width={30} alt="" />
          {positionMember("Top lane")
            ? positionMember("Top lane")?.in_game_name
            : "player name"}
        </li>
        <li>
          <img src={PlayerIconMid} width={30} alt="" />
          {positionMember("Mid lane")
            ? positionMember("Mid lane")?.in_game_name
            : "player name"}
        </li>
        <li>
          <img src={PlayerIconJungle} width={30} alt="" />
          {positionMember("Jungle")
            ? positionMember("Jungle")?.in_game_name
            : "player name"}
        </li>
        <li>
          <img src={PlayerIconBot} width={30} alt="" />
          {positionMember("Bot lane")
            ? positionMember("Bot lane")?.in_game_name
            : "player name"}
        </li>
        <li>
          <img src={PlayerIconSup} width={30} alt="" />
          {positionMember("Support")
            ? positionMember("Support")?.in_game_name
            : "player name"}
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  .clan-img-cont {
    position: relative;
    .clan-border {
      z-index: 0;
    }
    .clan-logo {
      position: absolute;
      left: 60px;
      top: 57px;
      width: 79px;
      z-index: 1;
    }
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
      text-transform: capitalize;
    }
  }
  h2 {
    margin-top: 100px;
    text-transform: capitalize;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: -50px;
`;

export default TopCardClan;
