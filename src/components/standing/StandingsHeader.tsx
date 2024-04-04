import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StandingsHeader: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <StandingsStageWrapper>
      <span>Stage:</span>
      <NavLink
        to="/standings/pre-tournament-brackets"
        style={
          pathname === "/standings/pre-tournament-brackets"
            ? { color: "#FF7A00" }
            : {}
        }
      >
        Pre tournament brackets
      </NavLink>
      <NavLink
        to="/standings/playoffs"
        style={pathname === "/standings/playoffs" ? { color: "#FF7A00" } : {}}
      >
        Playoffs
      </NavLink>
      <NavLink
        to="/standings/regular-season"
        style={
          pathname === "/standings/regular-season" ? { color: "#FF7A00" } : {}
        }
      >
        Regular season
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
`;
