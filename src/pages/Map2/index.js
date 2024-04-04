import L, { Layer } from "leaflet";
import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";

const Map2 = () => {

  // Tile Layer:
  // https://tile.openstreetmap.org/{z}/{x}/{y}.png

  // Tile Layer 2:
  // http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png



 

  return (
    <div>
      <h1 className="text-xl font-bold mb-3"> Map Challenge 2</h1>

      <p className=" mb-3"> Add a layer control with two tile layers to the map. </p>

      <div
        id="map"
        style={{ width: "500px", height: "500px", overflow: "hidden" }}
      />


    </div>
  );
};

export default Map2;
