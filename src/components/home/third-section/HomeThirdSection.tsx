import styled from "styled-components";
import TopCardClan from "../../top-clan-card/TopCardClan";


const HomeThirdSection = () => {
  return (
    <>
      <ThirdContainer>
        <TransparentDiv>
          <ThirdSection>
            <TopCardClan />
            <TopCardClan />
            <TopCardClan />
          </ThirdSection>
        </TransparentDiv>
      </ThirdContainer>
    </>
  );
};

export default HomeThirdSection;
const ThirdContainer = styled.div`
  min-height: 100vh;
  background: url("/backgrounds/footers-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
`;
const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TransparentDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.83);
  min-height: 100vh;
  width: 100%;
  position: relative;
`;
