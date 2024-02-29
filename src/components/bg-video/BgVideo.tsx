import styled from "styled-components";

const BgVideo = () => {
  return (
    <Background>
      <video autoPlay muted loop>
        <source src={"/assets/animated-ivern.webm"} type="video/mp4" />
      </video>
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
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default BgVideo;
