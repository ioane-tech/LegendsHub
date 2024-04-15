import styled from "styled-components";
import Header from "../header/Header";
import StandingsHeader from "./StandingsHeader";
import StandingsList from "./StandingsList";
import Footer from "../footer/Footer";
const Standings = () => {
  return (
    <>
      <Header />
      <StandingsMainContainer>
        <div className="standings-blurr">
          <StandingsHeader />
          <hr />
          <h1 className="standings-title">Standings</h1>
          <div className="standings-scrollabel">
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
            <StandingsList />
          </div>
        </div>
      </StandingsMainContainer>
      <Footer />
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
    width: 1024px;
    background-color: #00000059;
    color: #fff;
    backdrop-filter: blur(2px);
    height: 800px;
    hr {
      width: 100%;
      border: 0.3px solid rgba(240, 128, 24, 0.1);
    }
    .standings-scrollabel {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow-y: scroll;
      height: 520px;
    }
    .standings-title {
      font-weight: 500;
      font-size: 26px;
      line-height: 34.29px;
      font-family: "Roboto Slab", serif;
      text-align: center;
      padding-top: 47px;
      padding-bottom: 46px;
    }
  }
`;
