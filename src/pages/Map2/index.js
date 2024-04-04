import L, { Layer } from "leaflet";
import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";

const Map2 = () => {
  const mapRef = useRef(null);

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

      // const layer1 = L.tileLayer(
      //   "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      //   {}
      // ).addTo(_map);

      // const layer2 = L.tileLayer(
      //   "http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png",
      //   {}
      // ).addTo(_map);

      // var baseMaps = {
      //   OpenStreetMap: layer1,
      //   cycleMap: layer2,
      // };

      // var layerControl = L.control.layers(baseMaps).addTo(_map);
    }
  }, []);

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
