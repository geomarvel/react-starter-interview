
const DataTable = ({ data }) => {
    return (
        <div className="w-full text-left py-2">
            <table className="bg-white rounded rounde-2 w-full">
                <thead>
                    <tr>
                        <th className="pl-2">Time period</th>
                        <th className="pl-2">Availbility</th>
                        <th className="pl-2">Downtime</th>
                        <th className="pl-2">Incidents</th>
                        <th className="pl-2">Longest incident</th>
                        <th className="pl-2">Avg. incident</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <div className="bg-white flex space-x-[10px]">
                <input type="date" className="p-2" />
                <input type="date" className="p-2" />
                <button className="p-2 bg-gray-200">Calculate</button>
            </div>
        </div>
    )
}

export default DataTable;