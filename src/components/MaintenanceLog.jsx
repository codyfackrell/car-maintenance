import { useState, useEffect } from "react";
import axios from "axios";
import MaintenanceCard from "./MaintenanceCard";

function MaintenanceLog() {
  const [usersMaintenanceItems, setUsersMaintenanceItems] = useState([]);

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
        ))
        }
      </tbody>
    </table>
  )
}

export default MaintenanceLog;
