import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = () => {
    API.getEmployees()
      // .then((res) => res.json())
      .then((users) => {
        console.log(users.data.results);
        
        this.setState({ results: users.data.results });
        this.setState({ filteredEmployees: users.data.results })
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    // const input = event.target.name;
    const value = event.target.value
    const filteredEmployees = (event.target.value).toLowerCase();
    const filteredEmployee = this.state.results.filter(results => {
      return (
        (results.name.first
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.name.last
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.name.first
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.gender
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.phone
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1) ||
          (results.cell
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.location.city
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 )||
          (results.location.state
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1 ) ||
          (results.dob.age.toString()
          .toLowerCase()
          .indexOf(filteredEmployees) !== -1)
       
      );
    });
    this.setState({
      search: value,
      filteredEmployees: filteredEmployee,
    });
  };

  sortFields = (employees) => {
    let sortList = this.state.results

    sortList.sort(function(a,b){
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1
        }
    })
    

  }


  render() {
    
  
    // const filteredEmployee = this.state.results.filter(
    //     (filteredEmployees) => {
    //         return (
    //         filteredEmployees.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //         filteredEmployees.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

    //         )
    //     }
    // )
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList
          results={this.state.filteredEmployees}
          
        />
      </div>
    );
  }
}

export default SearchResults;
