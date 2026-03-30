export default function SupplyChain(){

return(

<div className="page">

<h1 className="page-title">
Supply Chain
</h1>


{/* KPI */}

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow">
<p>Suppliers</p>
<h2 className="text-3xl font-bold mt-2">24</h2>
</div>

<div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl p-6 shadow">
<p>Active Shipments</p>
<h2 className="text-3xl font-bold mt-2">7</h2>
</div>

<div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl p-6 shadow">
<p>Delivered</p>
<h2 className="text-3xl font-bold mt-2">102</h2>
</div>

</div>


{/* SHIPMENT TABLE */}

<div className="bg-white rounded-xl shadow p-6">

<h3 className="text-lg font-semibold mb-4">
Shipment Tracking
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Shipment</th>
<th>Supplier</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">SH-234</td>
<td>TechParts Ltd</td>
<td className="text-green-600">Delivered</td>
</tr>

<tr className="border-b hover:bg-gray-50">
<td className="py-3">SH-235</td>
<td>PowerCore</td>
<td className="text-yellow-600">In Transit</td>
</tr>

<tr>
<td className="py-3">SH-236</td>
<td>SensorWorks</td>
<td className="text-blue-600">Processing</td>
</tr>

</tbody>

</table>

</div>

</div>

)

}