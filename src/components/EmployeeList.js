import React from "react";

function EmployeeList(props) {
  return (
    <div className="container">
      <table className="table caption-top">
        <caption>List of Employees</caption>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(results => (
            <tr>
              <td><img alt={results.picture.thumbnail} className="img-fluid" src={results.picture.thumbnail} style={{ margin: "0 auto" }} /></td>
              <td onClick={() => props.sortList}>{results.name.first}</td>
              <td onClick={() => props.sortList}>{results.name.last}</td>
              <td onClick={() => props.sortList}>{results.gender}</td>
              <td onClick={() => props.sortList}>{results.phone}</td>
              <td onClick={() => props.sortList}>{results.cell}</td>
              <td onClick={() => props.sortList}>{results.location.city}</td>
              <td onClick={() => props.sortList}>{results.location.state}</td>
              <td onClick={() => props.sortList}>{results.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
