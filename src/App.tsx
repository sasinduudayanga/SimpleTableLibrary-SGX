import React from 'react';
import SimpleTable from './components/SimpleTable';
import './App.css';

const App: React.FC = () => {
// Define column definitions for the SimpleTable
  const columnDefs = [
    { header: 'Employee', key: 'employee_name' },
    { header: 'EMP Id', key: 'emp_id' },
    { header: 'Duration', key: 'duration' },
    { header: 'Leave Type', key: 'leave_type' },
    { header: 'Reason', key: 'reason' },
    { header: 'Manager Name', key: 'manager_name' },
    { header: 'Manager Decision', key: 'manager_decision' },
  ];
// Sample data for the SimpleTable
  const data = [
    {
      "employee_name": "Aruni Jayawardena",
      "emp_id": "S001",
      "duration": "01/02/2023 - 02/02/2023",
      "leave_type": "Casual Leave",
      "reason": "Family Event",
      "manager_name": "Kamal Perera",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Dinesh Silva",
      "emp_id": "S002",
      "duration": "03/02/2023 - 04/02/2023",
      "leave_type": "Medical Leave",
      "reason": "Medical Appointment",
      "manager_name": "Nimali Fernando",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Priyanka Bandara",
      "emp_id": "S003",
      "duration": "05/02/2023 - 06/02/2023",
      "leave_type": "Casual Leave",
      "reason": "Personal Work",
      "manager_name": "Harsha Gamage",
      "manager_decision": "Pending"
      },
      {
      "employee_name": "Lakshitha Rajapaksa",
      "emp_id": "S004",
      "duration": "07/02/2023 - 08/02/2023",
      "leave_type": "Annual Leave",
      "reason": "Vacation",
      "manager_name": "Sunil Jayasuriya",
      "manager_decision": "Declined"
      },
      {
      "employee_name": "Naveen Ratnayake",
      "emp_id": "S005",
      "duration": "09/02/2023 - 10/02/2023",
      "leave_type": "Casual Leave",
      "reason": "Wedding",
      "manager_name": "Chamari Atapattu",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Sachini Nisansala",
      "emp_id": "S006",
      "duration": "11/02/2023 - 12/02/2023",
      "leave_type": "Sick Leave",
      "reason": "Illness",
      "manager_name": "Thilina Kandamby",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Ishan De Silva",
      "emp_id": "S007",
      "duration": "13/02/2023 - 14/02/2023",
      "leave_type": "Casual Leave",
      "reason": "Family Emergency",
      "manager_name": "Roshan Mahanama",
      "manager_decision": "Pending"
      },
      {
      "employee_name": "Maneesha Perera",
      "emp_id": "S008",
      "duration": "15/02/2023 - 16/02/2023",
      "leave_type": "Maternity Leave",
      "reason": "Childbirth",
      "manager_name": "Marvan Atapattu",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Ravin Wickramaratne",
      "emp_id": "S009",
      "duration": "17/02/2023 - 18/02/2023",
      "leave_type": "Casual Leave",
      "reason": "House Moving",
      "manager_name": "Sanath Jayasuriya",
      "manager_decision": "Approved"
      },
      {
      "employee_name": "Tharushi Liyanage",
      "emp_id": "S010",
      "duration": "19/02/2023 - 20/02/2023",
      "leave_type": "Study Leave",
      "reason": "Exams",
      "manager_name": "Kumar Sangakkara",
      "manager_decision": "Pending"
      }
  ];

  return (
    <div>
      <h1>Simple Table Component</h1>
      <SimpleTable columnDefs={columnDefs} data={data} />
    </div>
  );
};

export default App;
