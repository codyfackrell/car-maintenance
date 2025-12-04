function MaintenanceCard() {
  return (
    <tr>
      <td>{maintenanceItems.serviceDate}</td>
      <td>{maintenanceItems.service}</td>
      <td>{maintenanceItems.mileage}</td>
      <td>{maintenanceItems.notes}</td>
    </tr>
  );
}

export default MaintenanceCard;
