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
        <div className="bg-gray-300 p-2 w-full flex flex-col space-y-[20px]">
            <div className="flex space-x-[20px]">
                <DetailTile
                    header="Currently up for"
                    content="12 days 20 hours 12 mins"
                />
                <DetailTile
                    header="Last checked at"
                    content="47 seconds ago"
                />
                <DetailTile
                    header="Incidents"
                    content="13"
                />
            </div>
            
            <ResponseView data={chartData} />
            <DataTable />
        </div>
    )
}

export default Monitoring;