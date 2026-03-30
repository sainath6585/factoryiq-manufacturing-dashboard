import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement
)

export default function Projects(){

const [data,setData] = useState([20,35,40,50,65])

const labels = ["Week 1","Week 2","Week 3","Week 4","Week 5"]

useEffect(()=>{

const interval = setInterval(()=>{

setData(prev => {

const newValue = Math.min(100, prev[prev.length-1] + Math.floor(Math.random()*10))

const updated = [...prev.slice(1), newValue]

return updated

})

},3000)

return () => clearInterval(interval)

},[])

const chartData = {

labels: labels,

datasets:[
{
label:"Program Completion %",
data:data,
borderColor:"#10b981",
backgroundColor:"#10b981",
tension:0.4
}
]

}

return(

<div className="page">

<h1 className="page-title">
Program Tracking
</h1>

{/* LIVE GRAPH */}

<div className="bg-white shadow rounded-xl p-6 mb-8">

<h3 className="text-lg font-semibold mb-4">
Live Program Progress
</h3>

<Line data={chartData}/>

</div>


{/* PROGRAM TABLE */}

<div className="bg-white shadow rounded-xl p-6">

<h3 className="text-lg font-semibold mb-4">
Active Programs
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Program</th>
<th>Status</th>
<th>Manager</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Engine Module</td>
<td className="text-green-600">On Track</td>
<td>John</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Battery Pack</td>
<td className="text-yellow-600">Delayed</td>
<td>Alice</td>
</tr>

<tr>
<td className="py-3">Cooling System</td>
<td className="text-green-600">Completed</td>
<td>Mark</td>
</tr>

</tbody>

</table>

</div>

</div>

)

}