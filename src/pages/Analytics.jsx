import { useState } from "react"
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

export default function Analytics(){

const [range,setRange] = useState("weekly")

/* DATA BASED ON FILTER */

const productionValues = {

daily:[40,60,55,70,80],
weekly:[120,150,170,140,200],
monthly:[600,720,680,750,820]

}

const shipmentValues = {

daily:[10,15,12,18],
weekly:[30,45,38,60],
monthly:[120,160,140,190]

}

const productionData = {
labels:["Mon","Tue","Wed","Thu","Fri"],
datasets:[
{
label:"Production Output",
data:productionValues[range],
backgroundColor:"#14b8a6",
borderRadius:10
}
]
}

const shipmentData = {
labels:["Week 1","Week 2","Week 3","Week 4"],
datasets:[
{
label:"Shipments",
data:shipmentValues[range],
borderColor:"#6366f1",
backgroundColor:"rgba(99,102,241,0.2)",
tension:0.4,
fill:true
}
]
}

const defectData = {
labels:["Minor","Major","Critical"],
datasets:[
{
data:[40,15,5],
backgroundColor:["#22c55e","#f59e0b","#ef4444"]
}
]
}

const chartOptions = {

responsive:true,

plugins:{
legend:{position:"top"},
tooltip:{backgroundColor:"#111827"}
}

}

return(

<div className="page">

<h1 className="page-title">
Business Analytics
</h1>


{/* FILTER */}

<div className="flex gap-3 mb-8">

<button
onClick={()=>setRange("daily")}
className={`px-4 py-2 rounded ${range==="daily" ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
>
Daily
</button>

<button
onClick={()=>setRange("weekly")}
className={`px-4 py-2 rounded ${range==="weekly" ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
>
Weekly
</button>

<button
onClick={()=>setRange("monthly")}
className={`px-4 py-2 rounded ${range==="monthly" ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
>
Monthly
</button>

</div>


{/* CHART GRID */}

<div className="grid grid-cols-2 gap-8 mb-10">

<div className="bg-white rounded-xl shadow-lg p-8">

<h3 className="text-lg font-semibold mb-4">
Production Performance
</h3>

<Bar data={productionData} options={chartOptions}/>

</div>

<div className="bg-white rounded-xl shadow-lg p-8">

<h3 className="text-lg font-semibold mb-4">
Quality Defect Distribution
</h3>

<Doughnut data={defectData}/>

</div>

</div>


{/* SHIPMENT CHART */}

<div className="bg-white rounded-xl shadow-lg p-8">

<h3 className="text-lg font-semibold mb-4">
Supply Chain Shipments
</h3>

<Line data={shipmentData} options={chartOptions}/>

</div>

</div>

)

}