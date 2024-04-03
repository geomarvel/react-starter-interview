
const DataTable = ({ data }) => {
    return (
        <div className="w-full text-left shadow overflow-hidden rounded border border-gray border-1">
            <table className="table-auto bg-white w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th>Time period</th>
                        <th>Availbility</th>
                        <th>Downtime</th>
                        <th>Incidents</th>
                        <th>Longest incident</th>
                        <th>Avg. incident</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Today</td>
                        <td>100%</td>
                        <td>none</td>
                        <td>0</td>
                        <td>none</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>Last 7 days</td>
                        <td>100%</td>
                        <td>none</td>
                        <td>0</td>
                        <td>none</td>
                        <td>none</td>
                    </tr>
                </tbody>
            </table>
            <div className="bg-white flex space-x-[10px] p-[1rem]">
                <input type="date" className="border border-1 border-solid border-black" />
                <input type="date" />
                <button className="bg-gray-200 p-2 rounded rounded-2">
                    Calculate
                </button>
            </div>
        </div>
    )
}

export default DataTable;