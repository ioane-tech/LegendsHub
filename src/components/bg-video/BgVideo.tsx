import React from "react";
import styled from "styled-components";
import bgVideo from "/assets/out.mp4";

const BgVideo = () => {
  return (
    <Background>
      <video muted src={bgVideo}></video>
      <h2>awed</h2>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
  }
`;

export default BgVideo;
