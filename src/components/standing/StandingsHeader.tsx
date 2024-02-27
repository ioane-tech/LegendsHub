import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StandingsHeader: React.FC = () => {
  return (
    <StandingsStageWrapper>
      <span>STAGE:</span>
      <NavLink to="/standings">REGULAR SEASON</NavLink>
      <NavLink to="/playoffs">PLAYOFFS</NavLink>
    </StandingsStageWrapper>
  );
};

export default StandingsHeader;
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
  a {
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    transition: all 500ms ease;
    text-decoration: none;
  }
  a:hover {
    color: #00c8c8;
  }
`;
