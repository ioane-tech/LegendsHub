import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-47.png";

type Props = {
  position?: "reverse";
};

const FirstBracket = ({ position }: Props) => {
  const StyledFirstBracket = styled.div`
    color: #f18018;
    position: relative;
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
    <StyledFirstBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={30} />
      <p className="second-name">Team name</p>
    </StyledFirstBracket>
  );
};

export default FirstBracket;
