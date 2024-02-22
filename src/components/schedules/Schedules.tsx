import styled from "styled-components";
import SchedulesCard from "./SchedulesCard";

const Schedules: React.FC = () => {
  return (
    <div>
      <SchedulesContainer>
        <SchedulesCard />
      </SchedulesContainer>
    </div>
  );
};

export default Schedules;

const SchedulesContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background-color: #0f1519;
`;
