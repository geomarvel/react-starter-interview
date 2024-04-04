import L from "leaflet";
import { useEffect, useRef } from "react";

const Map1 = () => {

  // useEffect(() => {

  // })

  return (
    <div>
      <h1 className="text-xl font-bold mb-3"> Map Challenge 1</h1>

      <p className=" mb-3"> Use Vanilla Leaflet to add a map to this page. </p>

      <p>
        {" "}
        Leaflet Instructions:{" "}
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          src="https://leafletjs.com/examples/quick-start/"
        >
          {" "}
          https://leafletjs.com/examples/quick-start/
        </a>
      </p>

      <div id="map" style={{ width: "500px", height: "500px" }} />
    </div>
  );
};

export default Map1;
