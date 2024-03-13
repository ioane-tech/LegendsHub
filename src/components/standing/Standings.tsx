import styled from "styled-components";
import Header from "../header/Header";
import StandingsHeader from "./StandingsHeader";
import StandingsList from "./StandingsList";
const Standings = () => {
  return (
    <>
      <Header />
      <StandingsMainContainer>
        <div className="standings-blurr">
          <StandingsHeader />
          <hr />
          <div className="standings-scrollabel">
            <StandingsList />
          </div>
        </div>
      </StandingsMainContainer>
    </>
  );
};

export default Standings;

const StandingsMainContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/backgrounds/playoffs-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .standings-blurr {
    padding: 10px 40px 0;
    margin-top: 160px;
    margin-bottom: 160px;
    width: 60%;
    background-color: #00000059;
    color: #fff;
    backdrop-filter: blur(2px);
    hr {
      width: 100%;
      border: 0.3px solid rgba(240, 128, 24, 0.1);
    }
  }
`;
