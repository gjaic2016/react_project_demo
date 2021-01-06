import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent = (data) => {
  console.log("ovde sam" + data);
  // let count = inactive;
  // let archive = inactive;

  // let data = ["", count];

  // console.log(data);
  return (
    <div>
      <Chart
        width={"400px"}
        height={"250px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Oglasi", "Aktivni oglasi", "Neaktivni oglasi"],
          ["", 11, 4],
         
        ]}
        options={{
          title: "Odnos aktivnih/neaktivnih oglasa",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Broj oglasa",
            minValue: 0,
          },
          vAxis: {
            title: "Tip oglasa",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default ChartComponent;
