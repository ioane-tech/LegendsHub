import styled from "styled-components";
import GoldenButton from "../../styled-components/golden-button";
import pauseIcon from "/icons/pause.png";
import startIcon from "/icons/start.png";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import loginBgMusic from "/assets/loginBgMusic.mp4";

const Header = () => {
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(false);
  const changePosition = () => {
    if (window.scrollY >= 900) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);

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

  const HeaderContainer = styled.header`
    font-family: "Cormorant Unicase", serif;
    background-color: transparent;
    backdrop-filter: ${() => (scroll ? "blur(5px)" : "")};
    font-weight: 500;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85px;
    position: ${() => ("absolute")};
    z-index: 25;
    padding: 80px 50px;
    span {
      display: flex;
      align-items: center;
      gap: 40px;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 30px;
      margin-right: auto;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 22px;
      transition: 0.4s;
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: goldenrod;
      }
    }
    div {
      gap: 20px;
      display: flex;
    }
  `;

  const LogoImg = styled.img`
    width: 90px;
    height: 80px;
  `;

  return (
    <HeaderContainer>
      <audio ref={audioRef} src={loginBgMusic} loop />
      <span>
        <LogoImg src="assets/logo.png" alt="logo" />
        <ul>
          <NavLink to="/">home</NavLink>
          <NavLink to="/schedules">schedule</NavLink>
          <NavLink to="/standings">standings</NavLink>
          <NavLink to="/">about/Contact</NavLink>
        </ul>
      </span>
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

export default Header;
