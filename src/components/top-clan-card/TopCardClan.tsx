import React from "react";
import styled from "styled-components";
import CLanLogo from "/assets/theme-21-border.png";
import PlayerIconTop from "/assets/icon-position-top.png";

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
          <img src={PlayerIconTop} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconTop} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconTop} width={30} alt="" />
          Player Name
        </li>
        <li>
          <img src={PlayerIconTop} width={30} alt="" />
          Player Name
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 700px;
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
`;

const VideoContainer = styled.div`
  position: absolute;
  top: -150px;
`;

export default TopCardClan;
