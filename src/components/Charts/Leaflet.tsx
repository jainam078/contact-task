import React from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import { Loader } from "./Loader";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;
const Leaflet = () => {
  // Fetch country specific data of cases
  const { data: countriesData, isLoading } = useQuery("countriesData", () =>
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.data)
  );

  return (
    <div>
      {!isLoading ? (
        <MapContainer center={[0, 0]} zoom={2} className="min-h-[50vh]">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countriesData &&
            countriesData.map((country: any) => (
              <Marker
                key={country.countryInfo.iso3}
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                <Popup>
                  <div>
                    <h3>{country.country}</h3>
                    <p>Total Cases: {country.cases}</p>
                    <p>Total Active: {country.active}</p>
                    <p>Total Recovered: {country.recovered}</p>
                    <p>Total Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Leaflet;
