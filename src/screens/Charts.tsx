import React from "react";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import axios from "axios";

import LineGraph from "../components/Charts/Line";
import Leaflet from "../components/Charts/Leaflet";
import { Loader } from "../components/Charts/Loader";

const Charts = () => {
  const { data: worldwideData, isLoading } = useQuery("worldwideData", () =>
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => response.data)
  );
  return (
    <Layout>
      <div className="py-3">
        <div className="grid  md:grid-cols-2 gap-3 items-center">
          <div>
            <h1 className="text-2xl font-bold">Number of Cases / Month</h1>
            <LineGraph />
          </div>

          <div className="px-3 py-3 text-neutral-700">
            <h1 className="text-2xl my-2 font-bold">Worldwide Covid Stats </h1>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white shadow-md rounded-md p-3">
                  <h1 className="text-md font-bold text-blue-600 capitalize">
                    cases
                  </h1>
                  <h1 className="text-xl font-bold ">{worldwideData?.cases}</h1>
                </div>
                <div className="bg-white shadow-md rounded-md p-3">
                  <h1 className="text-md font-bold text-blue-600 capitalize">
                    recovered
                  </h1>
                  <p className="text-xl font-bold  ">
                    {worldwideData?.recovered}
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-md p-3">
                  <h1 className="text-ms font-bold text-blue-600 capitalize">
                    deaths
                  </h1>
                  <h1 className="text-xl font-bold ">
                    {worldwideData?.deaths}
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-3 py-3 text-neutral-700 font-bold">
        <h1 className="my-3 text-2xl">Country Specific Data </h1>
        <Leaflet />
      </div>
    </Layout>
  );
};

export default Charts;
