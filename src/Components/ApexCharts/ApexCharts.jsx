import { useState } from "react";
import Chart from 'react-apexcharts'

function ApexCharts() {
  const data = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  };
  const [barChartData, setBarChartData] = useState(data);

  return (
    <>
      <h2>Apex Charts</h2>

      <section className="border border-secondary p-3">
        <p>Bar Chart</p>
        <Chart options={barChartData.options} series={barChartData.series} type="bar" width={500} height={320} />
      </section>
    </>
  );
}

export default ApexCharts;
