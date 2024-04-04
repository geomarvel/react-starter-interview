import axios from "axios";
import L, { Layer } from "leaflet";
import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";

const Map3 = () => {
  const mapRef = useRef(null);
  const controlRef = useRef(null);

  // Tile Layer:
  // https://tile.openstreetmap.org/{z}/{x}/{y}.png

  // Tile Layer 2:
  // http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png

  // GeoJson for FeatureLayer:
  // https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json

  useEffect(() => {
    if (mapRef.current == null) {
      const _map = L.map("map").setView([51.505, -0.09], 13);
      mapRef.current = _map;

      const layer1 = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {}
      ).addTo(_map);

      const layer2 = L.tileLayer(
        "http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png",
        {}
      ).addTo(_map);

      var baseMaps = {
        OpenStreetMap: layer1,
        cycleMap: layer2,
      };

      controlRef.current = L.control.layers(baseMaps).addTo(_map);
    }
  }, []);

  async function GET_geoJSON() {
    const res = await axios.get(
      "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
    );
    console.log(res.data);

    L.geoJSON(res.data).addTo(mapRef.current);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-3"> Map Challenge 3</h1>

      <p className=" mb-3">
        Modify the onClick event of the first button to zoom to the US.
      </p>

      <p className=" mb-3">
        Modify the onClick event of the second button to load the GeoJSON data
        and add it to the map as a layer.
      </p>

      <p className=" mb-3">
        Bonus: Add the layer to the control. 
      </p>


      <div
        id="map"
        style={{ width: "500px", height: "500px", overflow: "hidden" }}
      />

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
          onClick={() => {
            // NYC Lat Long: 40.737, -73.923

            mapRef.current.setView([40.737, -73.923], 5);
          }}
        >
          Go to US
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
          onClick={() => {
            GET_geoJSON();
          }}
        >
          Load and add GeoJson
        </button>
      </div>
    </div>
  );
};

export default Map3;
