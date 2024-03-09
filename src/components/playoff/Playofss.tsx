import Header from "../header/Header";
import styled from "styled-components";
import StandingsHeader from "../standing/StandingsHeader";

const Playofss: React.FC = () => {
  return (
    <>
      <Header />
      <PlayoffsMainContainer>
        <PlayoffsBlur>
          <StandingsHeader />
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
  backdrop-filter: blur(2px);
`;
