import { useState, useEffect } from "react";
import { IoAddSharp } from "react-icons/io5";
import axios from "axios";
import MaintenanceCard from "./MaintenanceCard";

function MaintenanceLog() {
  // const [usersMaintenanceItems, setUsersMaintenanceItems] = useState([]);

  const usersMaintenanceItems = [
    {
      id: 1,
      serviceDate: "2025",
      service: "oil change",
      mileage: "180000",
      notes:
        "i purchased the new package during this visit to the delarship, great snacks",
    },

    {
      id: 2,
      serviceDate: "2025-12-12",
      service: "tire repair",
      mileage: "180300",
      notes: "Had a porcupine in my tire",
    },
  ];

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
          <th className="actions-header">
            <IoAddSharp className="add-icon" />
          </th>
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
