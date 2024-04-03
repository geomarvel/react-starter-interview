import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import DetailTile from "../../components/Monitoring/DetailTile";
import { Data } from "../../utils/Data";
import ResponseView from "../../components/Monitoring/ResponseView";
import { useState } from "react";
import DataTable from "../../components/Monitoring/DataTable";

Chart.register(CategoryScale);

const Monitoring = () => {
    
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
    });

    return (
        <div className="bg-gray-100 p-2 w-full flex flex-col space-y-[20px]">
            <div className="flex space-x-[20px]">
                <DetailTile>
                    <div className="">Currently up for</div>
                    <div className="font-bold text-[20px]">12 days 20 hours 12 mins</div>
                </DetailTile>
                <DetailTile>    
                    <div className="">Last checked at</div>
                    <div className="font-bold text-[20px]">47 seconds ago</div>
                </DetailTile>
                <DetailTile>
                    <div className="">Incidents</div>
                    <div className="font-bold text-[20px]">13</div>
                </DetailTile>
            </div>
            <DetailTile>
                <ResponseView data={chartData} />
            </DetailTile>
            <DataTable />
        </div>
    )
}

export default Monitoring;