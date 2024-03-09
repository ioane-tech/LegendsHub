import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-171.png";

type Props = {
  position?: "reverse";
};

const SixthBracket = ({ position }: Props) => {
  const StyledSixthBracket = styled.div`
    position: relative;
    color: #ff6b00;
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
    <StyledSixthBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={960} />
      <p className="second-name">Team name</p>
    </StyledSixthBracket>
  );
};

export default SixthBracket;
