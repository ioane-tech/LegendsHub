import styled from "styled-components";
import TopCardClan from "../../top-clan-card/TopCardClan";
import Footer from "../../footer/Footer";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HomeThirdSection = () => {
  const [registeredTeams, setRegisteredTeams] = useState<teamType[]>([]);
  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get("api/teams_list/");
      const registeredTeamsResponse = response.data.filter((team: teamType) => {
        return team.status === true;
      });
      setRegisteredTeams(registeredTeamsResponse);
    };
    getTeams();
  }, []);

  return (
    <>
      <ThirdContainer>
        <ThirdSection>
          <Swiper
            className="carousel-of-teams"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={registeredTeams.length >= 4 ? 3 : 1}
            autoplay={true}
            loop={true}
          >
            {registeredTeams.map((team) => (
              <SwiperSlide key={team.id}>
                <TopCardClan name={team.name} members={team.members} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ThirdSection>
      </ThirdContainer>
      <Footer />
    </>
  );
};

export default HomeThirdSection;
const ThirdContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/backgrounds/footers-bg.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15%;
  .carousel-of-teams {
    display: flex;
  }
`;
