import FirstTeam from "/assets/schedules/firstTeam.png"
const SchedulesCard: React.FC = () => {
  return (
    <div>
      <div>
        <div>time</div>
        <div>
          <div>
            <h1>name</h1>
            <p>win/lose</p>
          </div>
          <img src={FirstTeam} alt="fTeam" />
        </div>
      </div>
    </div>
  );
};

export default SchedulesCard;
