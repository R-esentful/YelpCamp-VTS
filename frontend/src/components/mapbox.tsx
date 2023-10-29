import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";
import { useState } from "react";

function MapBox() {
  const [viewPort, setViewPort] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 4,
  });
  return (
    <ReactMapGL
      mapboxAccessToken="pk.eyJ1IjoicjEzMzciLCJhIjoiY2xnNjFtY2gxMDk0MzNrcWxzbWw2eWI1YiJ9.PUro_6vBg_LoYfYt_6g63w"
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      {...viewPort}
    />
  );
}
export default MapBox;
