import React from "react";
import styled from "styled-components";
import lagueOfLegendTitle from "/assets/leagueOfLegends.png";

const Home = () => {
  return (
    <HomeContainer>
      <img src={lagueOfLegendTitle} alt="" />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 800px;
  }
`;

export default Home;
