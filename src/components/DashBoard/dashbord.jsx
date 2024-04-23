import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import NavBar from "../NavBar";
import "./dashbord.scss";
import { SidebarProvider } from "./context/SideBarContext";
import BaseLayout from "./layout/BaseLayout";
import DashboardScreen from "./screens/DashboardScreen";
import PageNotFound from "./screens/PageNotFound";

function Dashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserRole = sessionStorage.getItem('loggedUserRole');
    
    if (!loggedUserRole) {
      navigate('/signup');
      return;
    }

    setIsAuthorized(loggedUserRole === "Admin");
  }, [navigate]);

  if (!isAuthorized) {
    return navigate('/'); 
  }

  return (
    <SidebarProvider>
      <NavBar />
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
}

export default Dashboard;
