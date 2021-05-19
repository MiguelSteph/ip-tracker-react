import React, { useContext, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import LocationContext from "./contexts/LocationContext";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const SearchResultMap = () => {
  const locationContext = useContext(LocationContext);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) {
      map.setView(
        L.latLng(
          locationContext.data.position[0],
          locationContext.data.position[1]
        )
      );
      L.marker(locationContext.data.position).addTo(map);
    } else {
      const localMap = L.map("mapid", {
        center: [49.8419, 24.0315],
        zoom: 13,
        scrollWheelZoom: false,
        layers: [
          L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }),
        ],
      });
      setMap(localMap);
    }
  }, [locationContext]);

  return <div className="map" id="mapid"></div>;
};

export default SearchResultMap;
