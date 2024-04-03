

const Map1 = () => {

  // Tile Layer:
  // https://tile.openstreetmap.org/{z}/{x}/{y}.png
  // GeoJson for FeatureLayer: 
  // https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json

  return (
    <div>
      <div> Place a leaflet map on this page.</div>

    <div className="flex-1"> 
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">
        +
      </button>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2  rounded">
        -
      </button>
      </div>
      <div> 
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Layers
      </button>
      </div>
    </div>
  );
};

export default Map1;
