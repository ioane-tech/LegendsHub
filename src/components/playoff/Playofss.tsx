import Header from "../header/Header";
import styled from "styled-components";
import StandingsHeader from "../standing/StandingsHeader";
import grayball from "/playoffs/grayBall.png";
import Footer from "../footer/Footer";
const Playofss: React.FC = () => {
  return (
    <>
      <Header />
      <PlayoffsMainContainer>
        <PlayoffsBlur>
          <StandingsHeader />
          <hr />
          {/* playoffs */}
          <PlayoffsTitle>
            <h1>Semi final</h1>
            <h1>Final</h1>
          </PlayoffsTitle>
          <Playoffscontainer>
            <PlayOffsMainWrapper>
              <PlayOffHalfWrapper>
                <PlayoffsBoxDivider>
                  <PlayoffBox>
                    <img src={grayball} alt="grayball" />
                    <h2>TBD</h2>
                    <h3>0</h3>
                  </PlayoffBox>
                  <PlayoffBox>
                    <img src={grayball} alt="grayball" />
                    <h2>TBD</h2>
                    <h3>0</h3>
                  </PlayoffBox>
                </PlayoffsBoxDivider>
                <PlayoffsBoxDivider>
                  <PlayoffBox>
                    <img src={grayball} alt="grayball" />
                    <h2>TBD</h2>
                    <h3>0</h3>
                  </PlayoffBox>
                  <PlayoffBox>
                    <img src={grayball} alt="grayball" />
                    <h2>TBD</h2>
                    <h3>0</h3>
                  </PlayoffBox>
                </PlayoffsBoxDivider>
              </PlayOffHalfWrapper>
            </PlayOffsMainWrapper>
            {/* finals */}
            <PlayoffsFinalContainer>
              <PlayoffsBoxDivider>
                <PlayoffBox>
                  <img src={grayball} alt="grayball" />
                  <h2>TBD</h2>
                  <h3>0</h3>
                </PlayoffBox>
                <PlayoffBox>
                  <img src={grayball} alt="grayball" />
                  <h2>TBD</h2>
                  <h3>0</h3>
                </PlayoffBox>
              </PlayoffsBoxDivider>
            </PlayoffsFinalContainer>
          </Playoffscontainer>
        </PlayoffsBlur>
      </PlayoffsMainContainer>
      <Footer />
    </>
  );
};

export default Playofss;

const PlayoffsMainContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/backgrounds/playoffs-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Playoffscontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 131px;
`;

const PlayoffsBlur = styled.div`
  padding: 10px 40px 0;
  margin-top: 160px;
  margin-bottom: 160px;
  width: 60%;
  background-color: #00000059;
  color: #fff;
  backdrop-filter: blur(2px);
  hr {
    width: 100%;
    border: 0.3px solid rgba(240, 128, 24, 0.1);
  }
`;

const PlayoffBox = styled.div`
  width: 325px;
  min-height: 70px;
  max-width: 100%;
  border: 0.5px solid rgba(240, 128, 24, 0.15);
  margin-bottom: 1px;
  background-color: #2a221acc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 22px;
    line-height: 26.64px;
    font-family: "Cormorant Unicase", serif !important;
    font-weight: 500;
  }
  h3 {
    color: #ff7a00;
    font-size: 24px;
  }
`;
const PlayOffHalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;
const PlayoffsBoxDivider = styled.div``;
const PlayOffsMainWrapper = styled.div`
  h1 {
    font-family: "Roboto Slab", serif;
    font-size: 22px;
    line-height: 29.01px;
    font-weight: 500;
    padding-bottom: 73px;
    padding-top: 55px;
  }
`;
const PlayoffsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 55px;
  padding-right: 270px;
  padding-bottom: 73px;
  h1 {
    font-family: "Roboto Slab", serif;
    font-size: 22px;
    line-height: 29.01px;
    font-weight: 500;
  }
`;
const PlayoffsFinalContainer = styled.div``;
