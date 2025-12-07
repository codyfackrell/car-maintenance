import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function MaintenanceCard({ maintenanceItems }) {
  return (
    <tr>
      <td>{maintenanceItems.serviceDate}</td>
      <td>{maintenanceItems.service}</td>
      <td>{maintenanceItems.mileage}</td>
      <td>{maintenanceItems.notes}</td>
      <td className="actions">
        <FaEdit className="edit-icon" />
        <MdDelete className="delete-icon" />
      </td>
    </tr>
  );
}

export default MaintenanceCard;
