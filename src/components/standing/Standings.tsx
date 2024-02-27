import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import FirstTeam from "/assets/schedules/firstTeam.png";
import styled from "styled-components";
const Standings = () => {
  return (
    <>
      <Header />
      <StandingsMainContainer>
        <StandingsStageWrapper>
          <span>STAGE:</span>
          <NavLink to="/standings">REGULAR SEASON</NavLink>
          <NavLink to="/playoffs">PLAYOFFS</NavLink>
        </StandingsStageWrapper>
        <h3>Standings</h3>
        <div>
          <StandingListNumberic>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
            <StandingList>
              <img src={FirstTeam} alt="fteam" />
              <div>
                <h1>G2 Esports</h1>
                <h2>7w-2L</h2>
              </div>
            </StandingList>
          </StandingListNumberic>
        </div>
      </StandingsMainContainer>
      <Footer />
    </>
  );
};

export default Standings;

const StandingsMainContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #0f1519;
  h3 {
    color: #fff;
    font-weight: bold;
    padding-bottom: 20px;
  }
`;
const StandingsStageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #0f1519;
  height: 120px;

  span {
    font-weight: bold;
    color: #8fa3b0;
    font-size: 18px;
  }
  a {
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    transition: all 500ms ease;
    text-decoration: none;
  }
  a:hover {
    color: #00c8c8;
  }
`;

const StandingListNumberic = styled.ol``;
const StandingList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  color: #fff;
  border-top: 1px solid #8fa3b0;
  border-bottom: 1px solid #8fa3b0;
  transition: all 500ms ease;
  img {
    width: 70px;
    height: 70px;
  }
  div > h1 {
    font-size: 19px;
  }
  div > h2 {
    font-size: 14px;
    color: #8fa3b0;
  }
  &:hover {
    background-color: black;
  }
`;
