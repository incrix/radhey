"use client";

import Stack from "@mui/material/Stack";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@/public/Images/heroOne.jpg";
import Carousel2 from "@/public/Images/heroTwo.jpg";

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // remove arrows if you want only dots
  };

  return (
    <Stack
      sx={{
        px: { xs: 0, md: 3 },
        mx: { xs: 2, md: 3 },
        mt: { xs: 12, md: 14 },
      }}
    >
      <Stack
        width="100%"
        sx={{
          borderRadius: "20px",
          overflow: "hidden", // ensures images respect border-radius
          position: "relative",
        }}
      >
        <Slider {...settings}>
          <div>
            <Image
              src={Carousel1}
              alt="Hero Image 1"
              style={{
                width: "100%",
                height: "550px",
                objectFit: "cover",
              }}
              priority
            />
          </div>
          <div>
            <Image
              src={Carousel2}
              alt="Hero Image 2"
              style={{
                width: "100%",
                height: "550px",
                objectFit: "cover",
              }}
            />
          </div>
        </Slider>
      </Stack>

      <style jsx global>{`
        /* Move dots inside and style them */
        .slick-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.7;
        }

        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
      `}</style>
    </Stack>
  );
}
