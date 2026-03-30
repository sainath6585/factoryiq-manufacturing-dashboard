import { useState, useEffect } from "react"

import { Bar, Line, Doughnut } from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
PointElement,
LineElement,
ArcElement,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
PointElement,
LineElement,
ArcElement,
Tooltip,
Legend
)

export default function Dashboard(){

/* KPI DATA */

const [projects,setProjects] = useState(12)
const [production,setProduction] = useState(82)
const [issues,setIssues] = useState(3)
const [shipments,setShipments] = useState(18)

/* SIMULATE REAL TIME UPDATE */

useEffect(()=>{

const interval = setInterval(()=>{

setProduction(prev => prev + Math.floor(Math.random()*2))
setShipments(prev => prev + Math.floor(Math.random()*2))

},5000)

return ()=> clearInterval(interval)

},[])

/* CHART DATA */

const productionTrend = {

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[
{
label:"Units",
data:[80,95,100,90,120],
borderColor:"#10b981",
backgroundColor:"rgba(16,185,129,0.2)",
tension:0.4,
fill:true
}
]

}

const defectData = {

labels:["Minor","Major","Critical"],

datasets:[
{
data:[12,5,2],
backgroundColor:["#22c55e","#f59e0b","#ef4444"]
}
]

}

const barData = {

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[
{
label:"Production",
data:[120,150,180,140,200],
backgroundColor:"#6366f1",
borderRadius:8
}
]

}

const lineData = {

labels:["Jan","Feb","Mar","Apr","May"],

datasets:[
{
label:"Orders",
data:[300,450,400,520,610],
borderColor:"#10b981",
backgroundColor:"rgba(16,185,129,0.2)",
tension:0.4,
fill:true
}
]

}

return(

<div className="page">

<h1 className="page-title">
Dashboard
</h1>


{/* KPI CARDS */}

<div className="grid grid-cols-4 gap-6 mb-10">

<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow hover:scale-105 transition">

<p>Projects</p>

<h2 className="text-3xl font-bold mt-2">
{projects}
</h2>

<p className="text-sm mt-1 text-indigo-200">
↑ Active Programs
</p>

</div>


<div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl p-6 shadow hover:scale-105 transition">

<p>Production</p>

<h2 className="text-3xl font-bold mt-2">
{production}%
</h2>

<p className="text-sm mt-1 text-green-200">
↑ Efficiency
</p>

</div>


<div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl p-6 shadow hover:scale-105 transition">

<p>Quality Issues</p>

<h2 className="text-3xl font-bold mt-2">
{issues}
</h2>

<p className="text-sm mt-1 text-yellow-200">
↓ Defects
</p>

</div>


<div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl p-6 shadow hover:scale-105 transition">

<p>Shipments</p>

<h2 className="text-3xl font-bold mt-2">
{shipments}
</h2>

<p className="text-sm mt-1 text-pink-200">
↑ Deliveries
</p>

</div>

</div>


{/* SMALL GRAPHS */}

<div className="grid grid-cols-2 gap-6 mb-10">

<div className="bg-white shadow rounded-xl p-5">

<h3 className="text-sm font-semibold text-gray-600 mb-3">
Production Trend
</h3>

<div className="h-40">

<Line data={productionTrend}/>

</div>

</div>


<div className="bg-white shadow rounded-xl p-5">

<h3 className="text-sm font-semibold text-gray-600 mb-3">
Quality Defects
</h3>

<div className="h-40">

<Doughnut data={defectData}/>

</div>

</div>

</div>


{/* MAIN ANALYTICS */}

<div className="grid grid-cols-2 gap-8 mb-10">

<div className="bg-white shadow rounded-xl p-6">

<h3 className="text-lg font-semibold mb-4">
Production Analytics
</h3>

<Bar data={barData}/>

</div>

<div className="bg-white shadow rounded-xl p-6">

<h3 className="text-lg font-semibold mb-4">
Orders Growth
</h3>

<Line data={lineData}/>

</div>

</div>


{/* ACTIVITY TABLE */}

<div className="bg-white shadow rounded-xl p-6">

<h3 className="text-lg font-semibold mb-4">
Recent Activities
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Activity</th>
<th>Status</th>
<th>Date</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Engine Module Production</td>
<td className="text-green-600">Completed</td>
<td>Today</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Battery Pack Testing</td>
<td className="text-yellow-600">Running</td>
<td>Yesterday</td>
</tr>

<tr>
<td className="py-3">Cooling Unit Inspection</td>
<td className="text-red-600">Delayed</td>
<td>2 days ago</td>
</tr>

</tbody>

</table>

</div>

</div>

)

}