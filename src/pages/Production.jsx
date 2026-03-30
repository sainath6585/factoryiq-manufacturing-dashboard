export default function Production(){

return(

<div className="page">

<h1 className="page-title">
Production Dashboard
</h1>


{/* KPI CARDS */}

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg">

<p className="text-sm">
Daily Output
</p>

<h2 className="text-3xl font-bold mt-2">
1,240 Units
</h2>

</div>


<div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl p-6 shadow-lg">

<p className="text-sm">
Efficiency
</p>

<h2 className="text-3xl font-bold mt-2">
82%
</h2>

</div>


<div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl p-6 shadow-lg">

<p className="text-sm">
Active Machines
</p>

<h2 className="text-3xl font-bold mt-2">
18
</h2>

</div>

</div>


{/* MACHINE STATUS */}

<div className="bg-white rounded-xl shadow p-6 mb-10">

<h3 className="text-lg font-semibold mb-4">
Machine Status
</h3>

<div className="grid grid-cols-4 gap-6">

<div className="p-4 border rounded-lg text-center">

<p className="text-gray-500">Line A</p>

<span className="text-green-600 font-semibold">
Running
</span>

</div>

<div className="p-4 border rounded-lg text-center">

<p className="text-gray-500">Line B</p>

<span className="text-green-600 font-semibold">
Running
</span>

</div>

<div className="p-4 border rounded-lg text-center">

<p className="text-gray-500">Line C</p>

<span className="text-yellow-600 font-semibold">
Maintenance
</span>

</div>

<div className="p-4 border rounded-lg text-center">

<p className="text-gray-500">Line D</p>

<span className="text-red-600 font-semibold">
Stopped
</span>

</div>

</div>

</div>


{/* PRODUCTION ORDERS TABLE */}

<div className="bg-white rounded-xl shadow p-6">

<h3 className="text-lg font-semibold mb-4">
Production Orders
</h3>

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Order</th>
<th>Product</th>
<th>Status</th>
<th>Progress</th>
</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-50">

<td className="py-3">
PO-1023
</td>

<td>
Engine Module
</td>

<td className="text-green-600">
Running
</td>

<td>

<div className="w-full bg-gray-200 rounded-full h-2">

<div className="bg-green-500 h-2 rounded-full w-3/4"></div>

</div>

</td>

</tr>


<tr className="border-b hover:bg-gray-50">

<td className="py-3">
PO-1024
</td>

<td>
Battery Pack
</td>

<td className="text-yellow-600">
Pending
</td>

<td>

<div className="w-full bg-gray-200 rounded-full h-2">

<div className="bg-yellow-500 h-2 rounded-full w-1/2"></div>

</div>

</td>

</tr>


<tr>

<td className="py-3">
PO-1025
</td>

<td>
Cooling System
</td>

<td className="text-green-600">
Completed
</td>

<td>

<div className="w-full bg-gray-200 rounded-full h-2">

<div className="bg-green-500 h-2 rounded-full w-full"></div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</div>

)

}