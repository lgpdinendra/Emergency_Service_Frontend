import { AreaCards, AreaTop } from "../dashbordComponents";
import ServiceMuitable from "../dashbordComponents/ServiceTable";
import UserMuitable from "../dashbordComponents/UseerTable";

const DashboardScreen = () => {
  return (
    <div className="content-area ">
      <AreaTop />
      <AreaCards />
      <UserMuitable/>
      <ServiceMuitable/>
    </div>
  );
};

export default DashboardScreen;
