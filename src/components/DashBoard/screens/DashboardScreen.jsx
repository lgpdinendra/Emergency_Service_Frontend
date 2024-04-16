import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../dashbordComponents";

const DashboardScreen = () => {
  return (
    <div className="content-area ">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default DashboardScreen;
