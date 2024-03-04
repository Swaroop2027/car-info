import { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  const initialVal = {
    name: "",
    username: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Input Text":
        return {
          ...state,
          [action.field]: action.payload,
        };

      case "Reset Text":
        return initialVal;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialVal);

  const handleTextChange = (e) => {
    dispatch({
      type: "Input Text",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const resetState = () => {
    dispatch({
      type: "Reset Text",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (state.name && state.username && state.password) {
      setUsers([...users, state]);
    } else {
      alert("Please fill all the details");
    }
    resetState();
    // navigate('/home')
  };

  useEffect(() => {
    // console.log(users);
    localStorage.setItem("StateData", JSON.stringify(users));
  }, [users]);

  return (
    <div className="bg-slate-300 h-screen">
      <div className="bg-gray-800 flex justify-between items-center px-[30px]">
        <h1 className="text-slate-50 font-extrabold text-5xl py-4">Car Info</h1>
      </div>
      <section className="flex flex-col items-center pt-24 bg-slate-300">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Emelia Erickson"
                  required
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="emelia_erickson24"
                  required
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handleClick(e)}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  to="/login"
                >
                  Log in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
