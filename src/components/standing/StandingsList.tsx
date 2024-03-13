import styled from "styled-components";
import grayball from "/playoffs/grayBall.png";
const StandingsList = () => {
  return (
    <StandingsListCover>
      <div className="standingsList-wrapper">
        <img src={grayball} alt="" />
        <div>
          <h1>G2 Esports</h1>
          <p>7W-2L</p>
        </div>
      </div>
    </StandingsListCover>
  );
};

export default StandingsList;

const StandingsListCover = styled.div`
  width: 80%;
  max-width: 100%;
  .standingsList-wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 29.06px;
    }
  }
`;
