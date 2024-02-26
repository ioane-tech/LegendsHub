import styled from "styled-components";
import GoldenButton from "../../styled-components/golden-button";
import pauseIcon from "/icons/pause.png";
import startIcon from "/icons/start.png";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import loginBgMusic from "/assets/loginBgMusic.mp4";

const Header = () => {
  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, [isPlaying]);

  return (
    <HeaderContainer>
      <audio ref={audioRef} src={loginBgMusic} loop />

      <img
        src="assets/logo.png"
        alt="logo"
        style={{ width: "50px", marginRight: "40px" }}
      />
      <ul>
        <NavLink to="/">home</NavLink>
        <NavLink to="/schedules">schedule</NavLink>
        <NavLink to="/standings">standings</NavLink>
        <NavLink to="/">about/Contact</NavLink>
      </ul>
      <div>
        <GoldenButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src={startIcon} alt="" width={10} />
          ) : (
            <img src={pauseIcon} alt="" width={10} />
          )}
        </GoldenButton>
        <GoldenButton onClick={() => navigate("/login")}>login</GoldenButton>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: rgba(0, 0, 0, 0.562);
  position: fixed;
  z-index: 25;
  backdrop-filter: blur(5px);
  padding: 0 5%;
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
    margin-right: auto;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: 0.4s;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      color: goldenrod;
    }
  }
`;

export default Header;
