import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = localStorage.getItem("CarData");

  const carList = JSON.parse(data);

  const navigate = useNavigate();

  const handleAddCar = () => {
    navigate("/car-form");
  };

  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <div className="bg-slate-300 h-screen w-full overflow-x-hidden">
      <div className="bg-gray-800 flex justify-between items-center px-[30px]">
        <div>
          <h1 className="text-slate-50 font-extrabold text-5xl py-4">
            Car Info
          </h1>
        </div>
        <div>
          <button
            className="bg-green-400 rounded-md h-fit p-2 m-5 hover:text-white"
            onClick={handleAddCar}
          >
            Add Car
          </button>
          <button
            className="bg-red-400 rounded-md h-fit p-2 m-5 hover:text-white"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>

      {carList ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Car Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Car Type
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Car Model
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Car Year
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Fuel Type
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Registration Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carList.map((ele, i) => (
                      <tr className="border-b" key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.carname}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.cartype}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.carmodel}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.caryear}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.fuel}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {ele.regnum}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
