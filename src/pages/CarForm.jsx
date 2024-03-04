import { useReducer, useState, useEffect } from "react";

const CarForm = () => {
  const [cars, setCars] = useState([]);

  const initialVal = {
    carname: "",
    cartype: "",
    carmodel: "",
    caryear: "",
    fuel: "",
    regnum: "",
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
    if (
      state.carname &&
      state.cartype &&
      state.carmodel &&
      state.caryear &&
      state.fuel &&
      state.regnum
    ) {
      setCars([...cars, state]);
    } else {
      alert("Please enter all the details");
    }
    resetState();
  };

  useEffect(() => {
    // console.log(cars);
    localStorage.setItem("CarData", JSON.stringify(cars));
  }, [cars]);

  return (
    <div className="h-screen bg-slate-300">
      <div className="bg-gray-800 w-full mt-0 flex justify-between items-center px-[30px]">
        <h1 className="text-slate-50 font-extrabold text-5xl py-4">Car Info</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-slate-300">
        <h1 className="text-3xl font-bold pt-2">Car Details</h1>

        <form className="w-full">
          <div className="flex flex-col items-center">
            <div className="my-2">
              <label
                htmlFor="carname"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Car Name
              </label>
              <input
                type="text"
                name="carname"
                id="carname"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Car name"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="cartype"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Car Type
              </label>
              <input
                type="text"
                name="cartype"
                id="cartype"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Car Type"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="carmodel"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Car Model
              </label>
              <input
                type="text"
                name="carmodel"
                id="carmodel"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Car Model"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="caryear"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Car Year
              </label>
              <input
                type="text"
                name="caryear"
                id="caryear"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Year"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="fuel"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Fuel Type
              </label>
              <input
                type="text"
                name="fuel"
                id="fuel"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Fuel Type"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="regnum"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Registration Number
              </label>
              <input
                type="text"
                name="regnum"
                id="regnum"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[800px]"
                placeholder="Reg Number"
                required
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <button
              type="submit"
              className="bg-slate-500 text-white p-3 rounded-md hover:bg-slate-100 hover:text-black font-semibold my-3 max-w-full w-[10%]"
              onClick={(e) => handleClick(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
