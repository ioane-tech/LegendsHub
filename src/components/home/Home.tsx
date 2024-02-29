import styled from "styled-components";
import lagueOfLegendTitle from "/assets/BECOME LEGEND.png";
import Apng from "/assets/a.png";
import Header from "../header/Header";
import BgVideo from "../bg-video/BgVideo";
import FirstHomeBorder from "/assets/Vector.png";
import FirstHomeBorderIcon from "/assets/Content.png";
import { useNavigate } from "react-router-dom";
import HomeSecondSection from "./second-section/HomeSecondSection";
import HomeThirdSection from "./third-section/HomeThirdSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <BgVideo />
      <Header />
      <FirstSection>
        <BecomeALegendContainer>
          <img src={lagueOfLegendTitle} />
          <AImg src={Apng} />
        </BecomeALegendContainer>

        <button
          onClick={() => {
            navigate("/registration");
          }}
        >
          Register Now
        </button>
        <div>
          <img src={FirstHomeBorder} />
          <img src={FirstHomeBorderIcon} />
        </div>
      </FirstSection>
      <HomeSecondSection />
      <HomeThirdSection />
    </HomeContainer>
  );
};

const HomeContainer = styled.main``;

const FirstSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div:nth-child(1) {
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
    h2 {
      position: absolute;
      font-size: medium;
      color: white;
      z-index: 1;
      top: 38px;
      left: 53px;
      width: 11ch;
    }
  }
  div:nth-child(3) {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    img:nth-child(1) {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
    img:nth-child(2) {
      width: 5%;
      z-index: 1;
      margin-bottom: 2.5%;
    }
  }
  button {
    margin-top: 100px;
    background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
    padding: 10px 70px;
    border: none;
    font-family: "Cormorant Unicase", serif;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      scale: 1.05;
      background: linear-gradient(to bottom, #ffbb00, #ffa600);
    }
    &:active {
      scale: 0.95;
    }
  }
`;

const BecomeALegendContainer = styled.span`
  position: relative;
  img {
    width: 600px;
    height: 352px;
    font-size: 24px;
    font-weight: 600;
  }
`;

const AImg = styled.img`
  position: absolute !important;
  width: 100px !important;
  height: 100px !important;
  top: 110px !important;
  left: 250px !important;
`;

export default Home;
