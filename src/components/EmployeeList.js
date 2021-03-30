import React from "react";

function EmployeeList(props) {
  return (
    <div className="container">
      <table class="table caption-top">
        <caption>List of Employees</caption>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
            <th scope="col">Location</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(results => (
            <tr>
              <td>{results.picture}</td>
              <td>{results.name}</td>
              <td>{results.gender}</td>
              <td>{results.phone}</td>
              <td>{results.cell}</td>
              <td>{results.location}</td>
              <td>{results.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
