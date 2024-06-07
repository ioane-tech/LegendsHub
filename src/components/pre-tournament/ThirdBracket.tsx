import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-119.png";

type Props = {
  position?: "reverse";
  firstTeam?: string;
  secondTeam?: string;
};

const ThirdBracket = ({ position, firstTeam, secondTeam }: Props) => {
  const StyledThirdBracket = styled.div`
    position: relative;
    color: #f7bb21;
    font-size: 16px;
    img {
      transform: ${() => (position === "reverse" ? "rotate(180deg)" : "")};
    }
    .first-name {
      position: absolute;
      top: -20px;
      left: -25px;
      width: 200px;
    }
    .second-name {
      position: absolute;
      left: -25px;
      bottom: -20px;
      width: 150px;
    }
  `;
  return (
    <StyledThirdBracket>
      <p className="first-name">{firstTeam}</p>
      <img src={bracket} alt="" width={80} height={120} />
      <p className="second-name">{secondTeam}</p>
    </StyledThirdBracket>
  );
};

export default ThirdBracket;
