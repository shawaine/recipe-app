import React, { useState, useEffect } from "react";
import "../scss/Departments.scss";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const response = await fetch("https://backendapi.turing.com/departments");
      const data = await response.json();
      setDepartments(data);
    };
    getDepartments();
  }, []);
  return (
    <div>
      <div className="list">
        <ul>
          {departments.map(department => (
            <li key={department.department_id}>
              <a href=""> {department.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Departments;
