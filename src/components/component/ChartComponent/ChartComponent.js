import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent = (props) => {
  return (
    <div>
      <Chart
        className="chartSize"
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["", "Aktivni", "Neaktivni"],
          ["Tip oglasa", props.active, props.inactive],
        ]}
        options={{
          // Material design options
          chart: {
            title: "Broj oglasa",
            subtitle: "",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default ChartComponent;
