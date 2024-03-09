import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StandingsHeader: React.FC = () => {
  return (
    <StandingsStageWrapper>
      <span>Stage:</span>
      <NavLink to="/standings">Regular season</NavLink>
      <NavLink to="/playoffs">Playoffs</NavLink>
      <NavLink to="/standings/pre-tournament-brackets">
        Pre tournament brackets
      </NavLink>
    </StandingsStageWrapper>
  );
};

export default StandingsHeader;
const StandingsStageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 60px;
  font-family: "Cormorant Unicase", serif !important;
  span {
    font-weight: bold;
    color: #8f8881;
    font-size: 22px;
    line-height: 26.64px;
  }
  a {
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    font-size: 22px;
    line-height: 26.64px;
    transition: all 500ms ease;
    text-decoration: none;
  }
  a:hover {
    color: #ff7a00;
  }
  a.active {
    color: #ff7a00;
  }
`;
