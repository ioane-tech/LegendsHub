import styled from "styled-components";
import SchedulesCard from "./SchedulesCard";

const Schedules: React.FC = () => {
  return (
    <div>
      <SchedulesContainer>
        <ScheduleTitle>Game Schedules</ScheduleTitle>
        <SchedulesCard />
        <SchedulesCard />
        <SchedulesCard />
        <SchedulesCard />
        <SchedulesCard />
        <SchedulesCard />
      </SchedulesContainer>
    </div>
  );
};

export default Schedules;

const SchedulesContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  min-height: 100vh;
  background-color: #0f1519;
`;

const ScheduleTitle = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  color: #fff;
`;
