import React from "react";
import { Line } from "react-chartjs-2";
function ResponseView({ data }) {
  return (
    <div className="bg-white rounded rounded-2 p-2">
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Response times across regions in the last month",
              align: 'start',
              font: { weight: 'bold', size: '18px' }
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default ResponseView;