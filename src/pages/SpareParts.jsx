import { Bar } from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement
)

export default function SpareParts(){

const stockData = {
labels:["Cooling Fans","Battery Cells","Sensors","Controllers"],
datasets:[
{
label:"Stock Level",
data:[120,25,200,75],
backgroundColor:[
"#10b981",
"#ef4444",
"#10b981",
"#f59e0b"
]
}
]
}

return(

<div className="page">

<h1 className="page-title">
Spare Parts Inventory
</h1>


{/* KPI CARDS */}

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl p-6 shadow">

<p>Total Parts</p>

<h2 className="text-3xl font-bold mt-2">
420
</h2>

</div>

<div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 shadow">

<p>Low Stock Alerts</p>

<h2 className="text-3xl font-bold mt-2">
2
</h2>

</div>

<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow">

<p>Suppliers</p>

<h2 className="text-3xl font-bold mt-2">
14
</h2>

</div>

</div>


{/* INVENTORY CHART */}

<div className="bg-white rounded-xl shadow p-6 mb-10">

<h3 className="text-lg font-semibold mb-4">
Inventory Levels
</h3>

<Bar data={stockData}/>

</div>


{/* INVENTORY TABLE */}

<div className="bg-white rounded-xl shadow p-6">

<h3 className="text-lg font-semibold mb-4">
Available Spare Parts
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Part</th>
<th>Supplier</th>
<th>Stock</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Cooling Fans</td>
<td>TechParts Ltd</td>
<td>120</td>
<td className="text-green-600">Available</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Battery Cells</td>
<td>PowerCore</td>
<td>25</td>
<td className="text-red-600">Low Stock</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Sensors</td>
<td>SensorWorks</td>
<td>200</td>
<td className="text-green-600">Available</td>
</tr>

<tr>
<td className="py-3">Controllers</td>
<td>ControlTech</td>
<td>75</td>
<td className="text-yellow-600">Medium</td>
</tr>

</tbody>

</table>

</div>

</div>

)

}