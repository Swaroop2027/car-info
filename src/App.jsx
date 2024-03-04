import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CarForm from "./pages/CarForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car-form" element={<CarForm />} />
      </Routes>
    </div>
  );
};

export default App;
