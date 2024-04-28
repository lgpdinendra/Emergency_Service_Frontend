import { AreaCards, AreaTop } from "../dashbordComponents";
import ServiceMuitable from "../UserComponents/ServiceTable";
import UserMuitable from "../UserComponents/UseerTable"

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
