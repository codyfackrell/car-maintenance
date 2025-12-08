import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <nav>
        <h1>Car Maintenance</h1>
        <a>Logout</a>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Date of Service</th>
            <th>Service</th>
            <th>Mileage</th>
            <th>Notes</th>
            <th className="actions-header">
              <Link to="/add-maintenance">
                <IoAddSharp className="add-icon" />
              </Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {usersMaintenanceItems.map((item) => (
            <MaintenanceCard key={item.id} maintenanceItems={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintenanceLog;
