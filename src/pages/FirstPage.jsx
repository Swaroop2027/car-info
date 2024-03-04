import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  let slides = [
    "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
    "https://news-site-za.s3.af-south-1.amazonaws.com/images/2023/08/HyunGrandi10_2.jpg",
    "https://master.shop/storage/units/big/hyundaii10a.jpg",
    "https://m.atcdn.co.uk/vms/media/cc47624dd2df446993573b8285c961c2.jpg&w=872&h=578&q=75",
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


  return (
    <div className="bg-slate-300 h-screen w-full overflow-hidden">
      <div className="bg-gray-800 flex justify-between items-center px-[30px]">
        <div>
          <h1 className="text-slate-50 font-extrabold text-5xl py-4">Car Info</h1>
        </div>
        <div>
          <button
            className="bg-green-400 rounded-md h-fit p-2 m-5 hover:text-white"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="bg-red-400 rounded-md h-fit p-2 m-5 hover:text-white"
            onClick={handleLogIn}
          >
            Login
          </button>
        </div>
      </div>

      <div className="w-[60%] m-auto pt-12">
        <div className="overflow-hidden relative">
          <div
            className={`flex transition ease-out duration-40 h-[400px]`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => {
              return <img src={s} className="object-fill" />;
            })}
          </div>

          <div className="absolute top-0 h-full w-full justify-between items-center flex text-slate-900 px-10 text-3xl">
            <button onClick={previousSlide}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 cursor-pointer  ${
                    i == current ? "bg-black" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-6 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          provident ipsa quibusdam dicta praesentium placeat, vitae magnam
          quidem! Beatae corporis voluptatibus quod voluptate similique rerum,
          earum dolore ex ut ullam. Obcaecati ipsa molestias vitae voluptatibus
          atque nemo, autem et, dicta quo neque porro fugit molestiae enim
          laborum facere! Amet officia eos esse. Odio maxime velit tenetur illum
          blanditiis sequi! Voluptas. Ab temporibus officiis quo velit quod!
          Quis minima dicta quia ut ad molestiae nobis quo reprehenderit,
          voluptate facere natus odit aliquid sapiente. Unde dignissimos in ea
          dolor incidunt ullam id. Dolorum repudiandae ut quae vitae commodi
          fugit quis provident corporis quisquam! Quae magni quis, praesentium,
          a quasi maiores placeat aspernatur tempore tenetur voluptate aliquid
          ad sequi eius doloremque porro blanditiis! Eos autem hic neque,
          voluptatum eius, voluptate odio maiores blanditiis repellendus dolores
          ipsum. Assumenda, culpa iste incidunt excepturi qui aspernatur,
          quibusdam ut perferendis ipsum dignissimos ipsam, veniam maiores sit
          eaque! Neque nulla minima minus sed voluptatibus laborum dolores?
        </p>
      </div>
    </div>
  );
};

export default FirstPage;


