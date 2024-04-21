// import AreaBarChart from "./AreaBarChart"

// const AreaCharts = () => {
//   return (
//     <section className="content-area-charts">
//       <AreaBarChart />
//     </section>
//   )
// }

// export default AreaCharts


import  { useState, useEffect } from "react";
import AreaBarChart from "./AreaBarChart";

const AreaCharts = () => {
  const [incidentData, setIncidentData] = useState([]);

  useEffect(() => {
    // Fetch data from your Spring Boot backend
    fetch("http://localhost:8080/incidents/count-by-month")
      .then((response) => response.json())
      .then((data) => {
        setIncidentData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="content-area-charts">
      <AreaBarChart data={incidentData} />
    </section>
  );
};

export default AreaCharts;
