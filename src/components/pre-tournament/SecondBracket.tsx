import styled from "styled-components";
import bracket2 from "/assets/pre-tournament/Vector-111.png";

type Props = {
  position?: "reverse";
  firstTeam?: string;
  secondTeam?: string;
};
const SecondBracket = ({ position, firstTeam, secondTeam }: Props) => {
  const StyledSecondBracket = styled.div`
    position: relative;
    color: #f19a18;
    font-size: 16px;
    img {
      transform: ${() => (position === "reverse" ? "rotate(180deg)" : "")};
    }
    .first-name {
      position: absolute;
      left: 0;
      top: -20px;
      left: 7px;
    }
    .second-name {
      position: absolute;
      left: 7px;
      bottom: 5px;
    }
  `;
  return (
    <StyledSecondBracket>
      <p className="first-name">{firstTeam}</p>
      <img src={bracket2} alt="" width={180} height={60} />
      <p className="second-name">{secondTeam}</p>
    </StyledSecondBracket>
  );
};

export default SecondBracket;
