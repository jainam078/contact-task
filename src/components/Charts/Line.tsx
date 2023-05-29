import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import {
  Chart,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  LineElement,
} from "chart.js";import "chartjs-adapter-date-fns";
import { format } from "date-fns";
import { Loader } from "./Loader";
Chart.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  LineElement
);
interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: boolean | string[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
const LineGraph = () => {
  // Fetch graph data for cases with date
  // const { data: graphData, isLoading } = useQuery("graphData", () =>
  //   axios
  //     .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
  //     .then((response) => response.data)
  // );

  // const graphCasesData = graphData?.cases;
  // const graphCasesData1 = graphData?.deaths;

  // const graphDataArray = Object.keys(graphCasesData || {}).map((date) => ({
  //   date,
  //   cases: graphCasesData[date],
  // }));

  // const graphDates = graphDataArray.map((data) => data.date);
  // const graphCaseCounts = graphDataArray.map((data) => data.cases);
  // const graphCaseCounts1 = graphDataArray.map((data) => data.cases);

  const [chartData, setChartData] = useState<IChartData>();

  const { isLoading, error, data } = useQuery({
    queryKey: ["covid"],
    queryFn: () => fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((response) => response.json()),
    keepPreviousData: true,
    onError: (err) => {
      console.log("Unable to fetch Price History data at the moment");
    },
  });

  useEffect(() => {
    if (data) {
      setChartData({
        labels: Object.keys(data?.cases || []),
        datasets: [
          {
            label: "Cases",
            data: Object.values(data?.cases || []),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Deaths",
            data: !!data?.deaths && Object.values(data?.deaths),
            borderColor: "rgb(55, 199, 92)",
            backgroundColor: "rgba(255, 199, 92, 0.5)",
          },
          {
            label: "Recovered",
            data: !!data?.recovered && Object.values(data?.recovered),
            borderColor: "rgb(155, 89, 102)",
            backgroundColor: "rgba(155, 89, 102, 0.5)",
          },
        ],
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        chartData && (
          <Line
            data={chartData}
            options={{
              responsive: true,
              scales: {
                x: {
                  type: "time",
                  time: {
                    parser: "MM/dd/yyyy",
                    tooltipFormat: "MMM dd, yyyy",
                  },
                },
              },
            }}
          />
        )
      )}
    </>
  );
};

export default LineGraph;
