import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function AnalyticsChart(){

const data = {
labels:["Mon","Tue","Wed","Thu","Fri"],
datasets:[
{
label:"Production Output",
data:[12,19,8,15,22],
backgroundColor:"#6366f1"
}
]
}

return(

<div className="card">

<h3 className="text-lg font-semibold mb-4">
Production Analytics
</h3>

<Bar data={data}/>

</div>

)

}