import styled from "styled-components";
import TopCardClan from "../../top-clan-card/TopCardClan";
import Footer from "../../footer/Footer";

const HomeThirdSection = () => {
  return (
    <>
      <ThirdContainer>
        <ThirdSection>
          <TopCardClan />
          <TopCardClan />
          <TopCardClan />
        </ThirdSection>
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


