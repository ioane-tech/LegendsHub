import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SchedulesHeader from "./SchedulesHeader";
import SchedulesCard from "./SchedulesCard";
import { useState } from "react";

const teams = [
  {
    id: 0,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "10",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "10",
  },
  {
    id: 1,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 2,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 3,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 4,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 5,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 6,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
  {
    id: 7,
    time: "20:00",
    firstTeam: "G2 Esports",
    firstTeamWins: "4W-5L",
    FirstTeamScore: "1",
    secondTeam: "G2 Esports",
    secondTeamWins: "4W-5L",
    secondTeamScore: "1",
  },
];

const Schedules: React.FC = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (newFile: File | undefined) => {
    setFile(newFile);
  };

  const [blur, setBlur] = useState<number | boolean>(false);
  const blurHandler = (id: number) => {
    if (blur === id) {
      setBlur(false);
    } else {
      setBlur(id);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className="schedules-container">
          <SchedulesHeader />
          <div className="cards-container-wrapper">
            <div className="cards-container">
              {teams.map((team) => (
                <SchedulesCard
                  key={team.id}
                  id={team.id}
                  blur={blur}
                  blurHandler={blurHandler}
                  file={file}
                  fileHandler={handleFileChange}
                  time={team.time}
                  firstTeam={team.firstTeam}
                  firstTeamWins={team.firstTeamWins}
                  FirstTeamScore={team.FirstTeamScore}
                  secondTeam={team.secondTeam}
                  secondTeamWins={team.secondTeamWins}
                  secondTeamScore={team.secondTeamScore}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding-top: 100px;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/backgrounds/69c883748f181c7d29138a90ac38b8df.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .schedules-container {
    width: 75%;
    background: #00000059;
    backdrop-filter: blur(2px);
    .cards-container-wrapper {
      padding: 0 50px 0 50px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 2px;
      }
      &::-webkit-scrollbar-track {
        background: #888888;
      }
      &::-webkit-scrollbar-thumb {
        background: #f18018;
        transition: 0.3s;
      }
      .cards-container {
        height: 400px;
      }
    }
  }
`;

export default Schedules;
