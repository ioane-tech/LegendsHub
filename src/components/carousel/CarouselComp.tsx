import styled from "styled-components";
import testImg from "/assets/theme-21-border.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const CarouselComp = () => {
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={9}
        autoplay={true}
        draggable={true}
      >
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  height: 300px;
  background-color: #1f0101;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  padding: 0 50px;
  img {
    width: 150px;
    transition: 0.3s;
    &:hover {
      scale: 1.3;
    }
  }
`;

export default CarouselComp;
