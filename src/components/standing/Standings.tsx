import FirstTeam from "/assets/schedules/firstTeam.png";
import styled from "styled-components";
const Standings = () => {
  return (
    <StandingsMainContainer>
      <StandingsStageWrapper>
        <span>STAGE:</span>
        <h2>REGULAR SEASON</h2>
        <h2>PLAYOFFS</h2>
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
        </StandingListNumberic>
      </div>
    </StandingsMainContainer>
  );
};

export default Standings;

const StandingsMainContainer = styled.div`
  padding-top: 60px;
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
  h1,
  h2 {
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    transition: all 500ms ease;
  }
  h1,
  h2:hover {
    color: #00c8c8;
  }
`;

const StandingListNumberic = styled.ol`
  list-style: decimal;
`;
const StandingList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
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
