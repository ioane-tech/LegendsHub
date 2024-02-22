import React, { useState } from "react";
import styled from "styled-components";
import characterImg from "/assets/_mmd_fbx__aatrox_rift_ver__dl_by_n1ghtingalez_dfmbx4l-pre.png";
import characterBorder from "/assets/Untitled-2.png";
import { motion } from "framer-motion";

type Props = {
  size?: "large";
};

const CharacterCard = ({ size }: Props) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const Container = styled.div`
    background-image: url(/assets/bloodmoon-aatrox-splash.jpg);
    background-position: center;
    background-size: cover;
    height: ${size === "large" ? "480px" : "400px"};
    width: ${size === "large" ? "270px" : "225px"};
    position: relative;
    video {
      position: absolute;
      left: ${size === "large" ? "-65px" : "-83px"};
      top: ${size === "large" ? "20px" : "-30px"};
      z-index: 1;
    }
  `;

  const BlackHover = styled.div`
    color: white;
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: ease-in-out 1.3s;
    display: flex;
    justify-content: center;
    h1 {
      color: white;
      margin-top: ${size === "large" ? "430px" : "350px"};
      font-size: ${size === "large" ? "30px" : "normal"};
    }
  `;

  const CharacterBorderStyle = styled.img`
    position: absolute;
    left: -13px;
    top: -20px;
    width: ${size === "large" ? "300px" : "250px"};
  `;

  const CharacterImgStyle = styled.img`
    position: absolute;
    left: -80px;
    top: -100px;
    z-index: 2;
    width: ${size === "large" ? "500px" : "400px"};
  `;

  return (
    <Container
      onMouseEnter={() => setShowAnimation(true)}
      onMouseLeave={() => setShowAnimation(false)}
    >
      {showAnimation && (
        <BlackHover
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.3 }}
          >
            Aatrox
          </motion.h1>
        </BlackHover>
      )}
      <div>
        {showAnimation && (
          <video autoPlay muted>
            <source src={"/assets/rekindled-unique-bolt.webm"} />
          </video>
        )}
        {showAnimation && (
          <CharacterImgStyle
            src={characterImg}
            alt=""
            as={motion.img}
            initial={{ opacity: 0, top: 0 }}
            animate={{ opacity: 1, top: -130 }}
            transition={{ duration: 1, delay: 1 }}
          />
        )}
        <CharacterBorderStyle src={characterBorder} alt="" />
      </div>
    </Container>
  );
};

export default CharacterCard;
