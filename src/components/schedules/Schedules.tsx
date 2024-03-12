import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SchedulesHeader from "./SchedulesHeader";
import SchedulesCard from "./SchedulesCard";

const Schedules: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="schedules-container">
          <SchedulesHeader />
          <div className="cards-container-wrapper">
            <div className="cards-container">
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
              <SchedulesCard />
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
