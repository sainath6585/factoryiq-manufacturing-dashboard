import { useState } from "react"

export default function Documents(){

const [search,setSearch] = useState("")

const documents = [

{
name:"Manufacturing Guidelines",
category:"Production",
owner:"Engineering",
version:"v2.1"
},

{
name:"Quality Standards",
category:"Quality",
owner:"Quality Team",
version:"v1.4"
},

{
name:"Supply Chain Policy",
category:"Supply Chain",
owner:"Operations",
version:"v1.2"
},

{
name:"Machine Maintenance Manual",
category:"Maintenance",
owner:"Engineering",
version:"v3.0"
}

]

const filteredDocs = documents.filter(doc =>
doc.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="page">

<h1 className="page-title">
Documents & Knowledge Base
</h1>

{/* TOP BAR */}

<div className="flex justify-between mb-6">

<input
type="text"
placeholder="Search documents..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-2 rounded w-80"
/>

<button className="bg-emerald-600 text-white px-4 py-2 rounded">
Upload Document
</button>

</div>


{/* DOCUMENT TABLE */}

<div className="bg-white rounded-xl shadow p-6">

<table className="w-full">

<thead className="border-b text-left">

<tr>
<th className="py-2">Document</th>
<th>Category</th>
<th>Owner</th>
<th>Version</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{filteredDocs.map((doc,index)=>(

<tr key={index} className="border-b hover:bg-gray-50">

<td className="py-3">{doc.name}</td>

<td className="text-indigo-600">
{doc.category}
</td>

<td>{doc.owner}</td>

<td>{doc.version}</td>

<td>

<button className="text-emerald-600 font-semibold">
Download
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}