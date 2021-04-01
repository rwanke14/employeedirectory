import React from "react";
import "./style.css"

function EmployeeList(props) {
  return (
    <div className="container">
      <table className="table caption-top">
        
        <thead className="header">
          <tr className="font">
            <th scope="col">
              <button type='button' className="btn">
              Picture</button></th>
            <th scope="col">
            <button type='button'className="btn" onClick={() => props.sortList("first")}>
              First</button></th>
            <th scope="col">
            <button type='button'className="btn" onClick={() => props.sortList('last')}>
              Last</button></th>
            <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('gender')} >
              Gender</button></th>
            <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('phone')} >
              Phone</button></th>
              <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('cell')} >
              Cell</button></th>
              <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('city')} >
              City</button></th>
              <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('state')} >
              State</button></th>
              <th scope="col">
            <button type='button' className="btn" onClick={() => props.sortList('age')} >
              Age</button></th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(results => (
            <tr key={results.id}>
              <td><img alt={results.picture.thumbnail} className="img-fluid" src={results.picture.thumbnail} style={{ margin: "0 auto" }} /></td>
              <td>{results.name.first}</td>
              <td>{results.name.last}</td>
              <td>{results.gender}</td>
              <td>{results.phone}</td>
              <td>{results.cell}</td>
              <td>{results.location.city}</td>
              <td>{results.location.state}</td>
              <td>{results.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
