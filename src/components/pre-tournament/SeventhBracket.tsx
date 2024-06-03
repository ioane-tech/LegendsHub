import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-175.png";

type Props = {
  position?: "reverse";
  teamName?: string;
};
const SeventhBracket = ({ position, teamName }: Props) => {
  const StyledSeventhBracket = styled.div`
    position: relative;
    img {
      transform: ${() => (position === "reverse" ? "rotate(180deg)" : "")};
    }
    p {
      font-size: 12px;
      position: absolute;
      color: #ff4d00;
      top: 7px;
      left: 13px;
    }
  `;
  return (
    <StyledSeventhBracket>
      <img src={bracket} alt="" width={90} height={30} />
      <p>{teamName}</p>
    </StyledSeventhBracket>
  );
};

export default SeventhBracket;
