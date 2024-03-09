import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-119.png";

const ThirdBracket = () => {
  return (
    <StyledThirdBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={120} />
      <p className="second-name">Team name</p>
    </StyledThirdBracket>
  );
};

const StyledThirdBracket = styled.div`
  position: relative;
  color: #f7bb21;
  font-size: 12px;
  .first-name {
    position: absolute;
    left: 0;
    top: -15px;
    left: 7px;
  }
  .second-name {
    position: absolute;
    left: 7px;
    bottom: 5px;
  }
`;

export default ThirdBracket;
