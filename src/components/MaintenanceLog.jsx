import { useState, useEffect } from "react";
import axios from "axios";
import MaintenanceCard from "./MaintenanceCard";

function MaintenanceLog() {
  const [usersMaintenanceItems, setUsersMaintenanceItems] = useState([]);

  // const usersMaintenanceItems = [
  //   {
  //     id: 1,
  //     serviceDate: "2025",
  //     service: "oil change",
  //     mileage: "180000",
  //     notes:
  //       "i purchased the new package during this visit to the delarship, great snacks",
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/maintenance/log/${userId}`);
      setUsersMaintenanceItems([response.data]);
    }

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date of Service</th>
          <th>Service</th>
          <th>Mileage</th>
          <th>Notes</th>
        </tr>
      </thead>

      <tbody>
        {usersMaintenanceItems.map((item) => (
          <MaintenanceCard key={item.id} maintenanceItems={item} />
        ))}
      </tbody>
    </table>
  );
}

export default MaintenanceLog;
