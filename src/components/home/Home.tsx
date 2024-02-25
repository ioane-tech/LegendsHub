import { useState } from "react";
import styled from "styled-components";
import lagueOfLegendTitle from "/assets/leagueOfLegends.png";
import TopCardClan from "../top-clan-card/TopCardClan";
import CharacterCard from "../character-story-card/CharacterCard";
import CarouselComp from "../carousel/CarouselComp";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  const [registerHover, setRegisterHover] = useState(false);

  return (
    <HomeContainer>
      <Header />
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

      <section>
        <AnnouncementContainer>
          <h2>Announcement</h2>
          <Announcement>
            <img src="assets/announcementImg.jpg" alt="" />
            <div>
              <p>
                Who holds the championship:{" "}
                <span style={{ fontFamily: "italic" }}>Nikusha Xulordava</span>
              </p>
              <p>
                Start Date:
                <span style={{ fontFamily: "italic" }}> 3/23/2024</span>
              </p>
              <p>
                Duration:<span style={{ fontFamily: "italic" }}> 4 Month</span>
              </p>
            </div>
          </Announcement>
        </AnnouncementContainer>
      </section>

      <section>
        <CarouselComp />
      </section>
      <ThirdSection>
        <TopCardClan />
        <TopCardClan />
        <TopCardClan />
      </ThirdSection>
      <FourthSection>
        <CharacterCard />
        <CharacterCard size="large" />
        <CharacterCard />
      </FourthSection>
      <Footer />
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
    width: 550px;
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

const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const FourthSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Announcement = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 20px;
    width: 200px;
    height: 200px;
  }
  div {
    width: 100%;
    text-align: left;
  }
  p {
    margin-left: 30px;
    margin-bottom: 20px;
    color: white;
  }
`;

const AnnouncementContainer = styled.section`
  width: 50%;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  h2 {
    color: #c89b3c;
    font-size: 30px;
  }
`;

export default Home;
