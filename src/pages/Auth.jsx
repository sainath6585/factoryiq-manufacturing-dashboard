import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUser, FaLock, FaUserShield } from "react-icons/fa"

export default function Auth(){

const navigate = useNavigate()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("admin")
const [mode,setMode] = useState("login")

const handleSubmit = () => {

if(!username || !password){
alert("Enter username and password")
return
}

localStorage.setItem("loggedIn","true")
localStorage.setItem("role",role)
localStorage.setItem("username",username)

navigate("/")
window.location.reload()
}

return(

<div
className="min-h-screen flex bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1581092160562-40aa08e78837')"
}}
>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/60"></div>


{/* LEFT PANEL */}
<div className="hidden lg:flex w-1/2 relative z-10 flex-col justify-center p-20 text-white 
bg-gradient-to-br from-slate-900 via-teal-700 to-emerald-600 border-r border-white/20">

<h1 className="text-5xl font-bold mb-6 tracking-wide">
FactoryIQ
</h1>

<p className="text-xl font-medium mb-6 text-white/90">
Smart Manufacturing Intelligence Platform
</p>

<p className="text-lg leading-relaxed text-white/90 max-w-xl">
FactoryIQ is a modern manufacturing intelligence platform built to deliver
real-time visibility into production operations, quality management,
and supply chain performance. By combining operational data with
interactive analytics and visual dashboards, FactoryIQ enables teams
to monitor production efficiency, track program progress, manage spare
parts inventory, and maintain engineering documentation in a unified
digital environment. The platform empowers organizations to make
data-driven decisions, improve operational efficiency, and maintain
consistent manufacturing excellence.
</p>

</div>


{/* RIGHT PANEL */}

<div className="flex w-full lg:w-1/2 items-center justify-center p-10 relative z-10">

<div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-md">

<h2 className="text-3xl font-bold text-white text-center mb-2">
{mode === "login" ? "Welcome Back" : "Create Account"}
</h2>

<p className="text-center text-white/80 mb-8">
Sign in to continue to FactoryIQ
</p>


{/* ROLE */}

<div className="flex items-center bg-white rounded-lg mb-4 px-3">

<FaUserShield className="text-gray-500 mr-2"/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full p-2 outline-none"
>

<option value="admin">Admin</option>
<option value="manager">Manager</option>
<option value="engineer">Engineer</option>

</select>

</div>


{/* USERNAME */}

<div className="flex items-center bg-white rounded-lg mb-4 px-3">

<FaUser className="text-gray-500 mr-2"/>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full p-2 outline-none"
/>

</div>


{/* PASSWORD */}

<div className="flex items-center bg-white rounded-lg mb-6 px-3">

<FaLock className="text-gray-500 mr-2"/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-2 outline-none"
/>

</div>


{/* BUTTON */}

<button
onClick={handleSubmit}
className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-lg font-semibold hover:scale-105 transition"
>

{mode === "login" ? "Login" : "Sign Up"}

</button>


{/* SWITCH MODE */}

<p className="text-center text-white mt-6 text-sm">

{mode === "login"
? "Don't have an account?"
: "Already have an account?"}

<button
onClick={()=>setMode(mode === "login" ? "signup" : "login")}
className="ml-2 text-yellow-300 font-semibold"
>

{mode === "login" ? "Sign Up" : "Login"}

</button>

</p>

</div>

</div>

</div>

)

}