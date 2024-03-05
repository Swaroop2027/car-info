import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const Slider = () => {
  let slides = [
    {
      url: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
    },
    {
      url: "https://news-site-za.s3.af-south-1.amazonaws.com/images/2023/08/HyunGrandi10_2.jpg",
    },
    { url: "https://master.shop/storage/units/big/hyundaii10a.jpg" },
    {
      url: "https://m.atcdn.co.uk/vms/media/cc47624dd2df446993573b8285c961c2.jpg&w=872&h=578&q=75",
    },
  ];

  return (
    <div className="slide-container">
      <Slide>
        {slides.map((image, ind) => (
          <div key={ind} className="flex justify-center mt-5">
            <img src={image.url} alt="" className="h-[400px] w-[800px]" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
