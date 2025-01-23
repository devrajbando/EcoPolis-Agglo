import React, { useEffect } from "react";
import { useMapEvents, Popup, Circle } from "react-leaflet";

const MapClickHandler = ({
  setIsSidebarOpen,
  setAllData,
  allData,
  clickedPoint,
  setClickedPoint,
  selectedRadio,
  setScore,
}) => {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setClickedPoint({ lat, lng });
      setIsSidebarOpen(null);
    },
  });

  const fetchData = async (lat, lon) => {
    const biodiversityUrl = `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${lat.toFixed(
      0
    )}&decimalLongitude=${lon.toFixed(0)}&radius=10`;
    const weatherApiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;

    try {
      const [biodiversityResponse, weatherResponse] = await Promise.all([
        fetch(biodiversityUrl),
        fetch(weatherUrl),
      ]);

      const { count } = await biodiversityResponse.json();
      const weatherData = await weatherResponse.json();

      setAllData({ biodiversityCount: count, weather: weatherData });
      localStorage.setItem(
        "data",
        JSON.stringify({ biodiversityCount: count, weather: weatherData })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const modelWork = async () => {
    try {
      const input = {
        latitude: clickedPoint.lat.toFixed(4),
        longitude: clickedPoint.lng.toFixed(4),
        use_case_type: selectedRadio,
      };
      console.log(input);
      const response = await fetch("http://localhost:5010/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      console.log(data);
      setScore(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (allData) {
      console.log("Fetched Data:", allData);
    }
  }, [allData]);

  const handleClick = async () => {
    if (clickedPoint) {
      await fetchData(clickedPoint.lat, clickedPoint.lng);
      modelWork();
      setIsSidebarOpen("true");
    }
  };

  return (
    clickedPoint && (
      <>
        <Circle
          center={[clickedPoint.lat, clickedPoint.lng]}
          pathOptions={{ color: "green", fillColor: "green" }}
          radius={100}
        >
          <Popup>
            <div className="pt-1">
              <h3 className="font-semibold">Analysis Point</h3>
              (Lat: {clickedPoint.lat.toFixed(4)}, Lng:{" "}
              {clickedPoint.lng.toFixed(4)})<br></br>
              <button
                onClick={handleClick}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                Analyze Location
              </button>
            </div>
          </Popup>
        </Circle>
      </>
    )
  );
};

export default MapClickHandler;