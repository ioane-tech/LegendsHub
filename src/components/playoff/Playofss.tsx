import Header from "../header/Header";
import styled from "styled-components";
import StandingsHeader from "../standing/StandingsHeader";
const Playofss: React.FC = () => {
  return (
    <PlayoffsMainContainer>
      <Header />
      <PlayoffsHelper>
        <StandingsHeader />
      </PlayoffsHelper>
      {/* parent */}
      <PlayoffsWrapper>
        {/* children */}
        <PlayoffsSemifinals>
          <h1>Semifinals</h1>
          <PlayoffsDivider>
            <PlayoffsBox>TBD</PlayoffsBox>
            <PlayoffsBox>TBD</PlayoffsBox>
          </PlayoffsDivider>
          <div>
            <PlayoffsBox>TBD</PlayoffsBox>
            <PlayoffsBox>TBD</PlayoffsBox>
          </div>
        </PlayoffsSemifinals>

        {/* children */}

        <PlayoffsFinals>
          <h1>Finals</h1>
          <PlayoffsBox>TBD</PlayoffsBox>
          <PlayoffsBox>TBD</PlayoffsBox>
        </PlayoffsFinals>
      </PlayoffsWrapper>
      {/* parent */}
    </PlayoffsMainContainer>
  );
};

export default Playofss;

const PlayoffsMainContainer = styled.div`
  background: #0f1519;
  min-height: 100vh;
  max-width: 100%;
`;
const PlayoffsHelper = styled.div`
  padding-top: 60px;
`;

const PlayoffsWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PlayoffsSemifinals = styled.div``;
const PlayoffsDivider = styled.div`
  margin-bottom: 40px;
`;
const PlayoffsBox = styled.div`
  background-color: #000000;
  width: 350px;
  max-width: 100%;
  padding: 14px 15px;
  border: 1px solid #8fa3b0;
  cursor: pointer;
  border-radius: 4px;
`;
const PlayoffsFinals = styled.div``;
