export default function AfterSales(){

const rma=[
{customer:"Tesla",issue:"Battery Fault"},
{customer:"Ford",issue:"Cooling Issue"},
{customer:"BMW",issue:"Sensor Error"}
]

return(

<div>

<h1>After Sales Service</h1>

<div className="table-container">

<table>

<thead>
<tr>
<th>Customer</th>
<th>Issue</th>
</tr>
</thead>

<tbody>

{rma.map((r,i)=>(
<tr key={i}>
<td>{r.customer}</td>
<td>{r.issue}</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

)

}