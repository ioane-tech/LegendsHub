import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Schedules: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="schedules-container">
          <div className="schedules-header">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              draggable={true}
              centeredSlides={true}
              className="swiper-container"
            >
              <SwiperSlide>
                <h1>Game schedules</h1>
                <p>3/23/2024</p>
              </SwiperSlide>
              <SwiperSlide>
                <h1>Game schedules</h1>
                <p>4/23/2024</p>
              </SwiperSlide>
            </Swiper>
            <div className="left-arrow"></div>
            <div className="right-arrow"></div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
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
    background: #00000059;
    backdrop-filter: blur(2px);
    width: 75%;
    .schedules-header {
      display: flex;
      justify-content: center;
      align-items: center;
      .left-arrow,
      .right-arrow {
        position: absolute;
        width: 30px;
        height: 30px;
        background-image: url("/assets/schedules/Vector-schedule.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: opacity 0.3s ease;
      }
      .left-arrow {
        left: 292px;
      }
      .right-arrow {
        transform: rotate(180deg);
        right: 292px;
      }
      .swiper-container {
        width: 500px;
        text-align: center;
        position: relative;

        h1 {
          font-family: "Cormorant Unicase", serif;
          font-weight: 700;
          font-size: 50px;
        }
        p {
          font-weight: 500;
          font-size: 26px;
          font-family: "Roboto Slab", serif;
        }
        .swiper-button-prev,
        .swiper-button-next {
          opacity: 0;
        }
      }
    }
  }
`;

export default Schedules;
