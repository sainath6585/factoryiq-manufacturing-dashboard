import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Sidebar from "./componets/Sidebar"
import Navbar from "./componets/Navbar"

import DashBoard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import Production from "./pages/Production"
import Quality from "./pages/Quality"
import SupplyChain from "./pages/SupplyChain"
import SpareParts from "./pages/SpareParts"
import Documents from "./pages/Documents"
import Auth from "./pages/Auth"
import Analytics from "./pages/Analytics"
import Profile from "./pages/Profile"

function Layout(){

return(

<div className="flex h-screen">

<Sidebar/>

<div className="flex-1 flex flex-col">

<Navbar/>

<div className="overflow-y-auto p-6">

<Routes>

<Route path="/" element={<DashBoard/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/production" element={<Production/>}/>
<Route path="/quality" element={<Quality/>}/>
<Route path="/supply" element={<SupplyChain/>}/>
<Route path="/spareparts" element={<SpareParts/>}/>
<Route path="/documents" element={<Documents/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/analytics" element={<Analytics/>}/>
</Routes>

</div>

</div>

</div>

)

}

function App(){

const loggedIn = localStorage.getItem("loggedIn")

return(

<BrowserRouter>

<Routes>

<Route
path="/auth"
element={loggedIn ? <Navigate to="/" /> : <Auth/>}
/>

<Route
path="/*"
element={
loggedIn ? <Layout/> : <Navigate to="/auth"/>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App