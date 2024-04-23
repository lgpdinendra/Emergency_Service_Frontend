import { useEffect, useState } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  const [userCount, setUserCount] = useState(null);
  const [incidentCount, setIncidentCount] = useState(null);
  const [servicceUserCount, setServiceCount] = useState(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/Usercount");
        if (response.ok) {
          const data = await response.json();
          setUserCount(data);
        } else {
          console.error("Failed to fetch user count");
        }
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  useEffect(() => {
    const fetchServiceUserCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/service/Usercount");
        if (response.ok) {
          const data = await response.json();
          setServiceCount(data);
        } else {
          console.error("Failed to fetch user count");
        }
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchServiceUserCount();
  }, []);

  useEffect(() => {
    const fetchIncidentCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/incidents/incidentCount");
        if (response.ok) {
          const data = await response.json();
          setIncidentCount(data);
        } else {
          console.error("Failed to fetch incident count");
        }
      } catch (error) {
        console.error("Error fetching incident count:", error);
      }
    };

    fetchIncidentCount();
  }, []);

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        cardInfo={{
          title: "Total Number of Public Users Registered",
          value: `${userCount ? userCount.toLocaleString() : "Loading..."}`,
          text: "Since 2024-January-01"
        }}
      />
      
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        cardInfo={{
          title: "Total Number of Emergency Incidents Reported",
          value: `${incidentCount ? incidentCount.toLocaleString() : "Loading..."}`,
          text: "Since 2024-January-01"
        }}
      />
      
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        cardInfo={{
          title: "Total Number of Service Users Registered",
          value: `${servicceUserCount ? servicceUserCount.toLocaleString() : "Loading..."}`,
          text: "Since 2024-January-01"
        }}
      />
    </section>
  );
};

export default AreaCards;
