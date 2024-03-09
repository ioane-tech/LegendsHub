import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-119.png";

type Props = {
  position?: "reverse";
};

const ThirdBracket = ({ position }: Props) => {
  const StyledThirdBracket = styled.div`
    position: relative;
    color: #f7bb21;
    font-size: 12px;
    img {
      transform: ${() => (position === "reverse" ? "rotate(180deg)" : "")};
    }
    .first-name {
      position: absolute;
      left: 0;
      top: -15px;
      left: 7px;
    }
    .second-name {
      position: absolute;
      left: 7px;
      bottom: 5px;
    }
  `;
  return (
    <StyledThirdBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={120} />
      <p className="second-name">Team name</p>
    </StyledThirdBracket>
  );
};

export default ThirdBracket;
