import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="bg-slate-300 h-screen w-full overflow-hidden">
      <div className="bg-gray-800 flex justify-between items-center px-[30px]">
        <div>
          <h1 className="text-slate-50 font-extrabold text-5xl py-4">
            Car Info
          </h1>
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

      <Slider />

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
          fugit quis provident corporis quisquam!
        </p>
      </div>
    </div>
  );
};

export default FirstPage;
