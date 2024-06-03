import styled from "styled-components";
import winner from "/assets/pre-tournament/winner.png";

type Props = {
  winnerTeam?: string;
};

const WinnerTeam = ({ winnerTeam }: Props) => {
  return (
    <WinnerContainer>
      <img src={winner} alt="" />
      <span>{winnerTeam ? winnerTeam : "Winner"}</span>
    </WinnerContainer>
  );
};

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  span {
    color: #f08018;
    border: 1px solid;
    border-image-source: linear-gradient(90deg, #f18018 0%, #f7d521 100%);
    border-image-slice: 1;
    border-image-width: 1;
    border-image-outset: 0;
    border-image-repeat: stretch;
    padding: 5px 35px;
  }
`;

export default WinnerTeam;
