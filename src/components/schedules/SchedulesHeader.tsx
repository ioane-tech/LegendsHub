import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";

const SchedulesHeader = () => {
  return (
    <SchedulesHead className="schedules-header">
      <span>
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
          <SwiperSlide>
            <h1>Game schedules</h1>
            <p>5/23/2024</p>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Game schedules</h1>
            <p>6/23/2024</p>
          </SwiperSlide>
        </Swiper>
        <div className="left-arrow"></div>
        <div className="right-arrow"></div>
      </span>
    </SchedulesHead>
  );
};

const SchedulesHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  span {
    position: relative;
  }
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
    left: 5px;
    top: 30px;
  }
  .right-arrow {
    transform: rotate(180deg);
    right: 4px;
    top: 31px;
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
`;

export default SchedulesHeader;
