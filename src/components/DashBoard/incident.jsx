import NavBar from "../NavBar";
import "./dashbord.scss";
import { SidebarProvider } from "./context/SideBarContext";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { IncidentUpdate } from "./screens";

const Incident = () => {
  return (
  
  <SidebarProvider>
  <NavBar/>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<IncidentUpdate />} />
          </Route>
        </Routes>
  </SidebarProvider>
   
  );
}

export default Incident