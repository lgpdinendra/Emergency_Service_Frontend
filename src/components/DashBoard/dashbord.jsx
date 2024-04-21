import NavBar from "../NavBar";
import "./dashbord.scss";
import { SidebarProvider } from "./context/SideBarContext";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import DashboardScreen from "./screens/DashboardScreen";
import PageNotFound from "./screens/PageNotFound";

const Dashboard = () => {
  return (
  <SidebarProvider>
  <NavBar/>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<DashboardScreen />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
  </SidebarProvider>
   
  );
}

export default Dashboard