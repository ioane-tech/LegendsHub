import styled from "styled-components";
import TopCardClan from "../../top-clan-card/TopCardClan";
const HomeThirdSection = () => {
  return (
    <ThirdContainer>
      <ThirdSection>
        <TopCardClan />
        <TopCardClan />
        <TopCardClan />
      </ThirdSection>
    </ThirdContainer>
  );
};

export default HomeThirdSection;
const ThirdContainer = styled.div`
  min-height: 100vh;
  background: url("/backgrounds/footers-bg.jpg");
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;
const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
`;
