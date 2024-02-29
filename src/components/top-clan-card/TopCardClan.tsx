import styled from "styled-components";
import CLanLogo from "/assets/theme-21-border.png";
import PlayerIconTop from "/assets/icon-position-top.png";
import PlayerIconMid from "/lanes/position_mid.png";
import PlayerIconJungle from "/lanes/position_jungle.png";
import PlayerIconBot from "/lanes/position_bottom.png";
import PlayerIconSup from "/lanes/position_support.png";

const TopCardClan = () => {
  return (
    <Container>
      <VideoContainer>
        <video autoPlay muted loop>
          <source src={"/assets/teaminformationbaner.webm"} />
        </video>
      </VideoContainer>
      <h2>Crew Name</h2>
      <div>
        <img src={CLanLogo} alt="" width={200} />
      </div>
      <ul>
        <li>
          <img src={PlayerIconTop} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconMid} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconJungle} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconBot} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconSup} width={30} alt="" />
          Player Name
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
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 5px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  h2 {
    margin-top: 100px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: -50px;
`;

export default TopCardClan;
