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
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 0.5px solid #f19a18;
  border-bottom: 0.5px solid #f19a18;
  .standingsList-wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
    padding-left: 40px;
    font-family: "Cormorant Unicase", serif;
    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 29.06px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15.83px;
      font-family: "Roboto Slab", serif;
    }
  }
`;
