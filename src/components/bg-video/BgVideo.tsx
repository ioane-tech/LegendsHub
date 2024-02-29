import styled from "styled-components";

const BgVideo = () => {
  return (
    <Background>
      <video autoPlay muted loop>
        <source src={"/assets/animated-ivern.webm"} type="video/mp4" />
      </video>
      <h2>awed</h2>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
  }
`;

export default BgVideo;
