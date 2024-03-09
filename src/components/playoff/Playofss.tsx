import Header from "../header/Header";
import styled from "styled-components";
import StandingsHeader from "../standing/StandingsHeader";
import grayball from "/playoffs/grayBall.png";
const Playofss: React.FC = () => {
  return (
    <>
      <Header />
      <PlayoffsMainContainer>
        <PlayoffsBlur>
          <StandingsHeader />
          <hr />
          {/* playoffs */}
          <div>
            <div>
              <h1>Semi final</h1>
              <PlayOffHalfWrapper>
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
              </PlayOffHalfWrapper>
            </div>
          </div>
        </PlayoffsBlur>
      </PlayoffsMainContainer>
    </>
  );
};

export default Playofss;

const PlayoffsMainContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("./backgrounds/playoffs-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayoffsBlur = styled.div`
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
  }
  h3 {
    color: #ff7a00;
    font-size: 24px;
  }
`;
const PlayOffHalfWrapper = styled.div``;
