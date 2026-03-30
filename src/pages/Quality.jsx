export default function Quality(){

return(

<div className="page">

<h1 className="page-title">
Quality Management
</h1>


{/* KPI */}

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 shadow">
<p>Total Defects</p>
<h2 className="text-3xl font-bold mt-2">24</h2>
</div>

<div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 shadow">
<p>Pending Inspections</p>
<h2 className="text-3xl font-bold mt-2">12</h2>
</div>

<div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 shadow">
<p>Resolved Issues</p>
<h2 className="text-3xl font-bold mt-2">40</h2>
</div>

</div>


{/* DEFECT TABLE */}

<div className="bg-white rounded-xl shadow p-6">

<h3 className="text-lg font-semibold mb-4">
Defect Reports
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Issue</th>
<th>Severity</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Surface Crack</td>
<td className="text-red-600">High</td>
<td>Open</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">Loose Wiring</td>
<td className="text-yellow-600">Medium</td>
<td>Investigating</td>
</tr>

<tr>
<td className="py-3">Alignment Error</td>
<td className="text-green-600">Low</td>
<td>Resolved</td>
</tr>

</tbody>

</table>

</div>

</div>

)

}