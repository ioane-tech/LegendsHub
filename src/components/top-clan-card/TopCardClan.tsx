import React from "react";
import styled from "styled-components";

const TopCardClan = () => {
  return (
    <Container>
      <VideoContainer>
        <video autoPlay muted loop>
          <source src={"/assets/teaminformationbaner.webm"} />
        </video>
      </VideoContainer>
      <h2>Crew Name</h2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: absolute;
`;

export default TopCardClan;
