import styled from "styled-components";
import TopCardClan from "../../top-clan-card/TopCardClan";
import Footer from "../../footer/Footer";

const HomeThirdSection = () => {
  return (
    <>
      <ThirdContainer>
        {/* <TransparentDiv> */}
        <ThirdSection>
          <TopCardClan />
          <TopCardClan />
          <TopCardClan />
        </ThirdSection>
        {/* </TransparentDiv> */}
      </ThirdContainer>
      <Footer />
    </>
  );
};

export default HomeThirdSection;
const ThirdContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/backgrounds/footers-bg.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15%;
`;

// const TransparentDiv = styled.div`
//   background-color: rgba(0, 0, 0, 0.83);
//   min-height: 100vh;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `;
