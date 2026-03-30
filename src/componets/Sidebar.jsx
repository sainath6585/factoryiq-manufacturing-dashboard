import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaChartLine } from "react-icons/fa"

import {
FaChartPie,
FaProjectDiagram,
FaIndustry,
FaCheckCircle,
FaTruck,
FaTools,
FaFileAlt,
FaBars
} from "react-icons/fa"

export default function Sidebar(){

const [collapsed,setCollapsed] = useState(false)

const username = localStorage.getItem("username")
const role = localStorage.getItem("role")

const linkClass = ({isActive}) =>
`flex items-center gap-4 px-4 py-3 rounded-xl transition
${isActive
? "bg-emerald-500 text-white shadow-lg"
: "text-gray-200 hover:bg-emerald-600 hover:text-white"}`

return(

<div className={`${collapsed ? "w-20" : "w-72"}
h-screen flex flex-col transition-all duration-300
bg-gradient-to-b from-emerald-700 via-teal-700 to-teal-800
dark:from-slate-900 dark:via-slate-900 dark:to-slate-800`}>
{/* HEADER */}

<div className="flex items-center justify-between px-6 py-6 border-b border-teal-600">

{!collapsed && (
<h1 className="text-2xl font-bold text-white">
FactoryIQ
</h1>
)}

<button
onClick={()=>setCollapsed(!collapsed)}
className="text-white"
>
<FaBars/>
</button>

</div>

{/* NAVIGATION */}

<nav className="flex-1 px-4 py-8 space-y-3">

{/* Dashboard */}

<NavLink to="/" className={linkClass}>
<FaChartPie/>
{!collapsed && "Dashboard"}
</NavLink>

{/* Admin Only */}

{role === "admin" && (
<>
<NavLink to="/projects" className={linkClass}>
<FaProjectDiagram/>
{!collapsed && "Program Tracking"}
</NavLink>

<NavLink to="/production" className={linkClass}>
<FaIndustry/>
{!collapsed && "Production"}
</NavLink>

<NavLink to="/quality" className={linkClass}>
<FaCheckCircle/>
{!collapsed && "Quality"}
</NavLink>

<NavLink to="/supply" className={linkClass}>
<FaTruck/>
{!collapsed && "Supply Chain"}
</NavLink>

<NavLink to="/spareparts" className={linkClass}>
<FaTools/>
{!collapsed && "Spare Parts"}
</NavLink>

<NavLink to="/documents" className={linkClass}>
<FaFileAlt/>
{!collapsed && "Documents"}
</NavLink>

<NavLink to="/analytics" className={linkClass}>
<FaChartLine/>
{!collapsed && "Analytics"}
</NavLink>
</>
)}

{/* Manager */}

{role === "manager" && (
<>
<NavLink to="/projects" className={linkClass}>
<FaProjectDiagram/>
{!collapsed && "Program Tracking"}
</NavLink>

<NavLink to="/production" className={linkClass}>
<FaIndustry/>
{!collapsed && "Production"}
</NavLink>

<NavLink to="/quality" className={linkClass}>
<FaCheckCircle/>
{!collapsed && "Quality"}
</NavLink>

<NavLink to="/analytics" className={linkClass}>
<FaChartLine/>
{!collapsed && "Analytics"}
</NavLink>

</>
)}

{/* Engineer */}

{role === "engineer" && (
<>
<NavLink to="/production" className={linkClass}>
<FaIndustry/>
{!collapsed && "Production"}
</NavLink>

<NavLink to="/quality" className={linkClass}>
<FaCheckCircle/>
{!collapsed && "Quality"}
</NavLink>

<NavLink to="/analytics" className={linkClass}>
<FaChartLine/>
{!collapsed && "Analytics"}
</NavLink>
</>
)}

</nav>

{/* USER PROFILE */}

<div className="px-6 py-6 border-t border-teal-600">

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold">
{username ? username.charAt(0).toUpperCase() : "U"}
</div>

{!collapsed && (
<div>
<p className="text-white text-sm font-semibold">
{username}
</p>
<p className="text-teal-200 text-xs capitalize">
{role}
</p>
</div>
)}

</div>

</div>

</div>

)

}