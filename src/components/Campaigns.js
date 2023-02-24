import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  });
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="container mx-auto">
      <Title>Kampanyanlar</Title>
      <Slider className="h-full hidden sm:block " {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <img src={banner.image} />
            </div>
          ))}
      </Slider>
    </div>
  );
}
