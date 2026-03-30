import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Auth(){

const navigate = useNavigate()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("admin")

const handleLogin = () => {

if(!username || !password){
alert("Enter username and password")
return
}

localStorage.setItem("loggedIn","true")
localStorage.setItem("role",role)

navigate("/")
}

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-700">

<div className="bg-white p-10 rounded-xl shadow-xl w-96">

<h2 className="text-2xl font-bold text-center mb-6">
FactoryIQ Login
</h2>

{/* ROLE */}

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full border p-2 mb-4 rounded"
>

<option value="admin">Admin</option>
<option value="manager">Manager</option>
<option value="engineer">Engineer</option>

</select>

{/* USERNAME */}

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full border p-2 mb-4 rounded"
/>

{/* PASSWORD */}

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-2 mb-6 rounded"
/>

<button
onClick={handleLogin}
className="w-full bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700"
>

Login

</button>

</div>

</div>

)

}