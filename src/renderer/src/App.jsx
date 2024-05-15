import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCelsiusValue } from "./redux/celsiusSlice";
import { setFahrenheitValue } from "./redux/fahrenheitSlice";
import { setKelvinValue } from "./redux/kelvinSlice";

const App = () => {
  const dispatch = useDispatch();
  const celsius = useSelector((state) => state.celsius.value);
  const fahrenheit = useSelector((state) => state.fahrenheit.value);
  const kelvin = useSelector((state) => state.kelvin.value);

  const handleTemperatureChange = (unit, value) => {
    switch (unit) {
      case "celsius":
        dispatch(setCelsiusValue(value));
        dispatch(setFahrenheitValue(value * (9 / 5) + 32));
        dispatch(setKelvinValue(value + 273.15));
        break;
      case "fahrenheit":
        dispatch(setFahrenheitValue(value));
        dispatch(setCelsiusValue((value - 32) * (5 / 9)));
        dispatch(setKelvinValue((value - 32) * (5 / 9) + 273.15));
        break;
      case "kelvin":
        dispatch(setKelvinValue(value));
        dispatch(setCelsiusValue(value - 273.15));
        dispatch(setFahrenheitValue((value - 273.15) * (9 / 5) + 32));
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col justify-between p-4">
      <div className="container mx-auto p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
        <h1 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Temperature Converter
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Convert temperatures in real-time: simply enter values below!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
          <div>
            <label className="block mb-2 text-3xl">Celsius (°C)</label>
            <input
              type="number"
              placeholder="0"
              value={celsius}
              onChange={(e) =>
                handleTemperatureChange("celsius", parseFloat(e.target.value))
              }
              className="w-full p-4 text-2xl rounded-lg bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-3xl">Fahrenheit (°F)</label>
            <input
              type="number"
              placeholder="32"
              value={fahrenheit}
              onChange={(e) =>
                handleTemperatureChange(
                  "fahrenheit",
                  parseFloat(e.target.value)
                )
              }
              className="w-full p-4 text-2xl rounded-lg bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-3xl">Kelvin(K)</label>
            <input
              type="number"
              placeholder="273.15"
              value={kelvin}
              onChange={(e) =>
                handleTemperatureChange("kelvin", parseFloat(e.target.value))
              }
              className="w-full p-4 text-2xl rounded-lg bg-gray-800 text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center mb-4">
        <a
          href="https://github.com/chiragbhatia7/PRODIGY_SD_01.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
