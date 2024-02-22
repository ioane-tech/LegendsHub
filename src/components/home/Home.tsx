import { useState } from "react";
import styled from "styled-components";
import lagueOfLegendTitle from "/assets/leagueOfLegends.png";
import TopCardClan from "../top-clan-card/TopCardClan";
import CharacterCard from "../character-story-card/CharacterCard";

const Home = () => {
  const [registerHover, setRegisterHover] = useState(false);
  return (
    <HomeContainer>
      <FirstSection>
        <img src={lagueOfLegendTitle} alt="" />
        <div
          onMouseEnter={() => {
            setRegisterHover(true);
          }}
          onMouseLeave={() => {
            setRegisterHover(false);
          }}
        >
          <video autoPlay muted loop>
            <source
              src={"/assets/find-match-button-idle.webm"}
              type="video/mp4"
            />
          </video>
          <video autoPlay muted loop>
            <source
              src={"/assets/find-match-button-intro.webm"}
              type="video/mp4"
            />
          </video>
          {registerHover && (
            <video autoPlay muted loop>
              <source
                src={"/assets/find-match-button-hover.webm"}
                type="video/mp4"
              />
            </video>
          )}
          <h1>Register Now</h1>
        </div>
      </FirstSection>
      <SecondSection>
        <TopCardClan />
        <TopCardClan />
        <TopCardClan />
      </SecondSection>
      <ThirdSection>
        <CharacterCard />
        <CharacterCard size="large" />
        <CharacterCard />
      </ThirdSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.main``;

const FirstSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 800px;
  }
  div {
    width: 230px;
    height: 100px;
    cursor: pointer;
    position: relative;
    video {
      position: absolute;
      top: 0;
      left: -15px;
      transition: 0.4s;
    }
    h1 {
      position: absolute;
      font-size: medium;
      color: white;
      z-index: 1;
      top: 38px;
      left: 53px;
      width: 11ch;
    }
  }
`;

const SecondSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

const ThirdSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Home;
