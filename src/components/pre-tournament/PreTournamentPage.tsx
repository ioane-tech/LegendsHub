import styled from "styled-components";
import Header from "../header/Header";
import SecondBracket from "./SecondBracket";
import ThirdBracket from "./ThirdBracket";
import FourthBracket from "./FourthBracket";
import SeventhBracket from "./SeventhBracket";
import Footer from "../footer/Footer";
import WinnerTeam from "./WinnerTeam";
import { NavLink } from "react-router-dom";
import GoldenButton from "../../styled-components/golden-button";

const PreTournament = () => {
  return (
    <>
      <Header />
      <BgStyle></BgStyle>
      <StyledMain>
        <NavLink to="/standings/playoffs">
          <GoldenButton>back</GoldenButton>
        </NavLink>
        <div className="main-bracket">
          <div className="second-brackets">
            <SecondBracket firstTeam={"Team name"} secondTeam={"Team name"} />
            <SecondBracket firstTeam={"Team name"} secondTeam={"Team name"} />
            <SecondBracket firstTeam={"Team name"} secondTeam={"Team name"} />
          </div>
          <div className="third-brackets">
            <ThirdBracket />
            <ThirdBracket secondTeam="Team name" />
          </div>
          <div className="fourth-brackets">
            <FourthBracket />
          </div>

          <div className="seventh-brackets">
            <SeventhBracket />
          </div>
          <div className="winner">
            <WinnerTeam />
          </div>
          <div className="seventh-brackets">
            <SeventhBracket position="reverse" />
          </div>
          <div className="fourth-brackets">
            <FourthBracket position="reverse" />
          </div>
          <div className="third-brackets">
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" secondTeam="Team name" />
          </div>
          <div className="second-brackets">
            <SecondBracket
              position="reverse"
              firstTeam={"Team name"}
              secondTeam={"Team name"}
            />
            <SecondBracket
              position="reverse"
              firstTeam={"Team name"}
              secondTeam={"Team name"}
            />
            <SecondBracket
              position="reverse"
              firstTeam={"Team name"}
              secondTeam={"Team name"}
            />
          </div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

const BgStyle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(/backgrounds/42087236a4cc442274f24d2caf4090a3.jpg);
  position: fixed;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const StyledMain = styled.main`
  font-family: "Cormorant Unicase", serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  padding: 200px 0 100px;
  a {
    position: absolute;
    left: 5%;
    top: 170px;
  }
  @media (max-width: 1660px) {
    padding-top: 280px;
  }
  .main-bracket {
    display: flex;
    .second-brackets {
      padding-top: 28px;
      display: flex;
      flex-direction: column;
      gap: 51px;
    }
    .third-brackets {
      padding-top: 55px;
      display: flex;
      flex-direction: column;
      gap: 105px;
    }
    .fourth-brackets {
      padding-top: 110px;
      display: flex;
      flex-direction: column;
      gap: 214px;
    }
    .seventh-brackets {
      padding-top: 215px;
    }
    .winner {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export default PreTournament;
