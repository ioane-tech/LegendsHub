import styled from "styled-components";
import GoldenButton from "../../styled-components/golden-button";
import pauseIcon from "/icons/pause.png";

import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src="" alt="logo" />
      <ul>
        <NavLink to="/">home</NavLink>
        <NavLink to="/schedules">schedule</NavLink>
        <NavLink to="/">standings</NavLink>
        <NavLink to="/">stories</NavLink>
        <NavLink to="/">about/Contact</NavLink>
      </ul>
      <div>
        <GoldenButton>
          <img src={pauseIcon} alt="" width={10} />
        </GoldenButton>
        <GoldenButton onClick={() => navigate("/registration")}>
          login
        </GoldenButton>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: rgba(0, 0, 0, 0.562);
  position: fixed;
  z-index: 25;
  backdrop-filter: blur(5px);
  padding: 0 5%;
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    transition: 0.4s;
    text-transform: capitalize;
    &:hover {
      color: goldenrod;
    }
  }
`;

export default Header;
