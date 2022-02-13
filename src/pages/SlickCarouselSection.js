import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export default function SlickCarouselSection() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        <div><Box component="img" src="/assets/images/whale1.png" alt="whale1" width="95%" /></div>
        <div><Box component="img" src="/assets/images/whale2.png" alt="whale2" width="95%" /></div>
        <div><Box component="img" src="/assets/images/whale3.png" alt="whale3" width="95%" /></div>
        <div><Box component="img" src="/assets/images/whale4.png" alt="whale4" width="95%" /></div>
        <div><Box component="img" src="/assets/images/whale5.png" alt="whale5" width="95%" /></div>
        <div><Box component="img" src="/assets/images/whale6.png" alt="whale6" width="95%" /></div>
      </Slider>
    </div>
  );
}