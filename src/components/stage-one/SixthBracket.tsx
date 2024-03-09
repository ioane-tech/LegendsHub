import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-171.png";

const SixthBracket = () => {
  return (
    <StyledSixthBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={960} />
      <p className="second-name">Team name</p>
    </StyledSixthBracket>
  );
};

const StyledSixthBracket = styled.div`
  position: relative;
  color: #ff6b00;
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

export default SixthBracket;
