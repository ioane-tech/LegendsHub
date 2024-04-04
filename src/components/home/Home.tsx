import styled from "styled-components";
import lagueOfLegendTitle from "/homePage/becomealegend.png";

import Header from "../header/Header";
import BgVideo from "../bg-video/BgVideo";
import FirstHomeBorder from "/assets/Vector.png";
import FirstHomeBorderIcon from "/assets/Content.png";
import { useNavigate } from "react-router-dom";
import HomeSecondSection from "./second-section/HomeSecondSection";
import HomeThirdSection from "./third-section/HomeThirdSection";
import { RegisterButton } from "../../styled-components/register-button";
import { getAccessToken } from "../../context/AuthService";

const Home = () => {
  const navigate = useNavigate();
  const Token = getAccessToken();

  return (
    <HomeContainer>
      <BgVideo />
      <Header />
      <FirstSection>
        <BecomeALegendContainer>
          <img src={lagueOfLegendTitle} style={{width: "750px"}} />
        </BecomeALegendContainer>

        {Token ? null : (
          <RegisterButton
            onClick={() => {
              navigate("/registration");
            }}
          >
            Register Now
          </RegisterButton>
        )}
        <div className="home-first-border">
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
  .home-first-border {
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
`;

const BecomeALegendContainer = styled.span`
  position: relative;
  img {
    width: 1050px;
  }
  @media (max-width: 1500px) {
    img {
      width: 850px;
    }
  }
`;

export default Home;
