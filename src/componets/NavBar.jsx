import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import {
FaBell,
FaUserCircle,
FaSearch,
FaMoon,
FaSun,
FaSignOutAlt
} from "react-icons/fa"

export default function Navbar(){

const navigate = useNavigate()

const [open,setOpen] = useState(false)
const [notifyOpen,setNotifyOpen] = useState(false)

const [query,setQuery] = useState("")
const [results,setResults] = useState([])

/* THEME */

const [dark,setDark] = useState(
localStorage.getItem("theme") === "dark"
)

useEffect(()=>{

if(dark){
document.documentElement.classList.add("dark")
}else{
document.documentElement.classList.remove("dark")
}

},[dark])

const toggleTheme = () => {

const newTheme = !dark

setDark(newTheme)

localStorage.setItem("theme", newTheme ? "dark" : "light")

}

/* USER */

const username = localStorage.getItem("username")
const role = localStorage.getItem("role")

/* SEARCH DATA */

const data = [

{ type:"Project", name:"Engine Module" },
{ type:"Production", name:"Battery Pack Order" },
{ type:"Spare Part", name:"Cooling Fan" },
{ type:"Spare Part", name:"Battery Cells" },
{ type:"Document", name:"Manufacturing Guidelines" },
{ type:"Document", name:"Quality Standards" }

]

const handleSearch = (value)=>{

setQuery(value)

const filtered = data.filter(item =>
item.name.toLowerCase().includes(value.toLowerCase())
)

setResults(filtered)

}

/* LOGOUT */

const logout = ()=>{

localStorage.clear()

navigate("/auth")

window.location.reload()

}

/* NOTIFICATIONS */

const notifications = [

"Low spare part stock for Battery Cells",
"Production Line C under maintenance",
"New quality defect reported",
"New engineering document uploaded"

]

return(

<div className="px-8 py-4 flex justify-between items-center shadow
bg-gradient-to-r from-emerald-600 to-teal-700
dark:from-slate-800 dark:to-slate-900
text-white">
<h2 className="text-xl font-semibold">
Manufacturing Dashboard
</h2>

<div className="flex items-center gap-6">

{/* SEARCH */}

<div className="relative hidden md:flex items-center bg-white/20 px-3 py-1 rounded-lg">

<FaSearch className="mr-2"/>

<input
type="text"
placeholder="Search..."
value={query}
onChange={(e)=>handleSearch(e.target.value)}
className="bg-transparent outline-none text-white placeholder-white"
/>

{query && (

<div className="absolute top-10 left-0 bg-white text-black rounded shadow-lg w-64">

{results.length === 0 && (
<p className="p-3 text-sm text-gray-500">
No results
</p>
)}

{results.map((item,index)=>(

<div
key={index}
className="p-3 hover:bg-gray-100 text-sm"
>

<span className="text-gray-500">
{item.type}
</span>

{" - "}

{item.name}

</div>

))}

</div>

)}

</div>

{/* DARK MODE */}

<button
onClick={toggleTheme}
className="hover:text-gray-200 text-lg"
>

{dark ? <FaSun/> : <FaMoon/>}

</button>

{/* NOTIFICATIONS */}

<div className="relative">

<button
onClick={()=>setNotifyOpen(!notifyOpen)}
className="relative hover:text-gray-200"
>

<FaBell/>

<span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
{notifications.length}
</span>

</button>

{notifyOpen && (

<div className="absolute right-0 mt-3 bg-white text-black rounded-lg shadow-lg w-72">

<div className="p-4 border-b font-semibold">
Notifications
</div>

<ul>

{notifications.map((item,index)=>(
<li
key={index}
className="px-4 py-3 hover:bg-gray-100 text-sm"
>
{item}
</li>
))}

</ul>

</div>

)}

</div>

{/* PROFILE */}

<div className="relative">

<button
onClick={()=>setOpen(!open)}
className="flex items-center gap-2"
>

<FaUserCircle size={26}/>

</button>

{open && (

<div className="absolute right-0 mt-3 bg-white text-black rounded-lg shadow-lg w-48">

<div className="px-4 py-3 border-b">

<p className="font-semibold">
{username}
</p>

<p className="text-xs text-gray-500 capitalize">
{role}
</p>

</div>

<button
onClick={()=>navigate("/profile")}
className="block w-full text-left px-4 py-2 hover:bg-gray-100"
>
Profile
</button>

<button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
Settings
</button>

<button
onClick={logout}
className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100"
>

<FaSignOutAlt/>

Logout

</button>

</div>

)}

</div>

</div>

</div>

)

}