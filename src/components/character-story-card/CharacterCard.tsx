import React, { useState } from "react";
import styled from "styled-components";
import characterImg from "/assets/_mmd_fbx__aatrox_rift_ver__dl_by_n1ghtingalez_dfmbx4l-pre.png";
import characterBorder from "/assets/Untitled-2.png";

const CharacterCard = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <Container
      onMouseEnter={() => setShowAnimation(true)}
      onMouseLeave={() => setShowAnimation(false)}
    >
      {showAnimation && <BlackHover></BlackHover>}
      <div>
        {showAnimation && (
          <video autoPlay muted>
            <source src={"/assets/rekindled-unique-bolt.webm"} />
          </video>
        )}
        {showAnimation && (
          <CharacterImgStyle src={characterImg} alt="" width={400} />
        )}
        <CharacterBorderStyle src={characterBorder} alt="" width={250} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(/assets/bloodmoon-aatrox-splash.jpg);
  height: 400px;
  width: 225px;
  background-position: center;
  position: relative;
  video {
    position: absolute;
    left: -83px;
    top: -30px;
    z-index: 1;
  }
`;

const BlackHover = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 1.3s;
`;

const CharacterBorderStyle = styled.img`
  position: absolute;
  left: -13px;
  top: -20px;
`;

const CharacterImgStyle = styled.img`
  position: absolute;
  left: -80px;
  top: -100px;
  z-index: 2;
`;

export default CharacterCard;
