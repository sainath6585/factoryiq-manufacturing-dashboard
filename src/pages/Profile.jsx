import { useState } from "react"

export default function Profile(){

const storedName = localStorage.getItem("username") || "User"
const storedRole = localStorage.getItem("role") || "Engineer"

const [name,setName] = useState(storedName)
const [role,setRole] = useState(storedRole)
const [email,setEmail] = useState("user@factoryiq.com")
const [department,setDepartment] = useState("Manufacturing")

const saveProfile = () => {

localStorage.setItem("username",name)
localStorage.setItem("role",role)

alert("Profile Updated")

}

return(

<div className="page">

<h1 className="page-title">
User Profile
</h1>


<div className="bg-white rounded-xl shadow p-8 max-w-2xl">

{/* Avatar */}

<div className="flex items-center gap-6 mb-6">

<div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold">

{name.charAt(0)}

</div>

<div>

<p className="text-xl font-semibold">
{name}
</p>

<p className="text-gray-500 capitalize">
{role}
</p>

</div>

</div>


{/* Form */}

<div className="grid grid-cols-2 gap-6">

<div>

<label className="text-sm text-gray-600">
Full Name
</label>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-2 rounded mt-1"
/>

</div>


<div>

<label className="text-sm text-gray-600">
Role
</label>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full border p-2 rounded mt-1"
>

<option>admin</option>
<option>manager</option>
<option>engineer</option>

</select>

</div>


<div>

<label className="text-sm text-gray-600">
Email
</label>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-2 rounded mt-1"
/>

</div>


<div>

<label className="text-sm text-gray-600">
Department
</label>

<input
value={department}
onChange={(e)=>setDepartment(e.target.value)}
className="w-full border p-2 rounded mt-1"
/>

</div>

</div>


{/* Save */}

<button
onClick={saveProfile}
className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded"
>

Save Changes

</button>

</div>

</div>

)

}