import styled from "styled-components";
import GoldenButton from "../../styled-components/golden-button";
import pauseIcon from "/icons/pause.png";
import startIcon from "/icons/start.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import loginBgMusic from "/assets/loginBgMusic.mp4";
import { getAccessToken } from "../../context/AuthService";
// @ts-ignore
import useSound from "use-sound";

const Header = () => {
  const [play, { stop }] = useSound(loginBgMusic, { volume: 1, loop: true });
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseToggle = () => {
    if (!isPaused) {
      play();
    } else {
      stop();
    }
    setIsPaused(!isPaused);
  };

  const navigate = useNavigate();
  const Token = getAccessToken();

  const [scroll, setScroll] = useState(false);
  const changePosition = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  const location = useLocation();
  const pathname = location.pathname;

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
    position: ${() => "fixed"};
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
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: #f08018;
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
    cursor: pointer;
  `;

  return (
    <HeaderContainer>
      <span>
        <LogoImg
          src="/assets/logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <ul>
          <NavLink to="/" style={pathname === "/" ? { color: "#F08018" } : {}}>
            home
          </NavLink>
          {/* <NavLink
            to="/schedules"
            style={pathname === "/schedules" ? { color: "#F08018" } : {}}
          >
            schedule
          </NavLink> */}
          <NavLink
            to="/standings/playoffs"
            style={
              pathname === "/standings/regular-season" ||
              pathname === "/standings/playoffs" ||
              pathname === "/standings/pre-tournament-brackets"
                ? { color: "#F08018" }
                : {}
            }
          >
            standings
          </NavLink>
          <NavLink to="/about">about/Contact</NavLink>
        </ul>
      </span>
      <div>
        <GoldenButton onClick={handlePauseToggle}>
          {!isPaused ? (
            <img src={startIcon} alt="" width={10} />
          ) : (
            <img src={pauseIcon} alt="" width={10} />
          )}
        </GoldenButton>
        {Token ? (
          <GoldenButton onClick={() => navigate("/profile")}>
            profile
          </GoldenButton>
        ) : (
          <GoldenButton onClick={() => navigate("/login")}>login</GoldenButton>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
