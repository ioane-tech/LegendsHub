import styled from "styled-components";
import FirstTeam from "/assets/schedules/firstTeam.png";
const SchedulesCard: React.FC = () => {
  return (
    <SchedulesCardsContainer>
      {/* first Team */}
      <SchedulesFirstTeam>
        <div>
          <ScheduleTime>20:00</ScheduleTime>
        </div>
        <ScheduleTeamCredsContainer>
          <ScheduleFirstTeamLogo>
            <h1>G2 Esports</h1>
            <p>4W-5L</p>
          </ScheduleFirstTeamLogo>
          <ScheduleTeamIcon src={FirstTeam} alt="fTeam" />
        </ScheduleTeamCredsContainer>
      </SchedulesFirstTeam>
      {/* first Team */}
      {/* score */}
      <div>
        <ScoreBoard>1 : 1</ScoreBoard>
      </div>
      {/* score */}
      {/* second team */}
      <SchedulesSecondteam>
        <SchedulesSecondInfoContianer>
          <ScheduleTeamIcon src={FirstTeam} alt="fTeam" />
          <SchedulesSecondTeamLogo>
            <h1>G2 Esports</h1>
            <p>4W-5L</p>
          </SchedulesSecondTeamLogo>
        </SchedulesSecondInfoContianer>
        <div>
          <Season>Season 1</Season>
        </div>
      </SchedulesSecondteam>
      {/* second team */}
    </SchedulesCardsContainer>
  );
};

export default SchedulesCard;

const SchedulesCardsContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #8fa3b0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #8fa3b0;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    background: black;
  }
`;
const SchedulesFirstTeam = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ScheduleTime = styled.h1`
  color: #fff;
`;
const ScheduleTeamCredsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScheduleFirstTeamLogo = styled.div`
  color: #8fa3b0;
  font-size: smaller;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

// second team
const SchedulesSecondteam = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SchedulesSecondInfoContianer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8fa3b0;
  font-size: smaller;
`;
const SchedulesSecondTeamLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Season = styled.h1`
  color: #8fa3b0;
  font-size: 21px;
`;

const ScoreBoard = styled.span`
  font-weight: bold;
  font-size: 23px;
`;
const ScheduleTeamIcon = styled.img`
  width: 70px;
  height: 70px;
`;
