import styled from "styled-components";
import FirstTeam from "/assets/schedules/firstTeam.png";
const SchedulesCard: React.FC = () => {
  return (
    <SchedulesCardsContainer>
      <div>
        <ScheduleTime>20:00</ScheduleTime>
      </div>
      <ScheduleTeamCredsContainer>
        <ScheduleFirstTeamLogo>
          <h1>G2 Esports</h1>
          <p>4W-5L</p>
        </ScheduleFirstTeamLogo>
        <img src={FirstTeam} alt="fTeam" />
      </ScheduleTeamCredsContainer>
    </SchedulesCardsContainer>
  );
};

export default SchedulesCard;

const SchedulesCardsContainer = styled.div`
  color: #fff;
  padding-top: 120px;
  display: flex;
  justify-content: space-around;
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
`;
