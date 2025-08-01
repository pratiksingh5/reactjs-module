import { useState, useEffect } from "react";
// import StateCityData from "./utils/constant";
// import CityData from "./utils/constant"
import { StateCityData } from "./utils/constant";

// const selectedState =  StateCityData.Maharashtra;

const App = () => {
  const [selectedState, setSelectedState] = useState(""); // string like "Jharkhand"
  const [selectedCity, setSelectedCity] = useState(""); // string like Pune
  const [cities, setCities] = useState([]); // Array like ["Pune", 'Mumbai', 'Kolahpur']


  useEffect(() => {
    // console.log("selectedState change hua", selectedState)
    console.log("cities", cities)
    setCities(StateCityData[selectedState])
  }, [selectedState])

  // component Did Update 
  // Update/Render 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Select State & City
        </h2>

        {/* State Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            State
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">-- Select State --</option>
            {Object.keys(StateCityData).map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            City
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">-- Select City --</option>
            {cities?.length && cities.map((city, i) => {
              return (
                <option key={i} value={city}>{city}</option>
              )
            } )}
          </select>
        </div>

        <div className="text-center text-green-700 font-medium">
          You selected <strong>{selectedState}</strong> in <strong>{selectedCity} </strong>.
        </div>
      </div>
    </div>
  );
};

export default App;
