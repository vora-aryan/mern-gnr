import { useState } from "react";

const Tasks = () => {
  const cityData = {
    ind: ["delhi", "mumbai", "surat"],
    uk: ["london", "liverpool"],
  };

  const [city, setCity] = useState(cityData.ind);

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#DDD",
        }}
      >
        <h1>Tasks</h1>
      </div>
      <div
        className=""
        style={{ backgroundColor: "lightcyan", padding: "30px" }}
      >
        <h2>▶Select Opt/ useState</h2>
        <br />
        <div>
          <span>Select Country </span>
          <select onChange={(e) => setCity(cityData[e.target.value])}>
            <option value="ind">India</option>
            <option value="uk">UK</option>
          </select>
        </div>

        <br />
        <div>
          <span>Select City </span>
          <select>
            {city.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default Tasks;
