import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import NavBar from "../NavBar";
import "./dashbord.scss";
import { SidebarProvider } from "./context/SideBarContext";
import BaseLayout from "./layout/BaseLayout";
import PageNotFound from "./screens/PageNotFound";
import PublicUSerComp from './UserComponents/UseerTable';

function PublicUser() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserRole = sessionStorage.getItem('loggedUserRole');
    
    if (!loggedUserRole) {
      navigate('/signup');
      return;
    }

    setIsAuthorized(loggedUserRole === "ServiceUsers");
  }, [navigate]);

  if (!isAuthorized) {
    return navigate('/'); 
  }

  return (
    <SidebarProvider>
      <NavBar />
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<PublicUSerComp/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
}

export default PublicUser;
