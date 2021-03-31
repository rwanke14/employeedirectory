import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = () => {
    API.getEmployees()
   // .then((res) => res.json())
      .then((users) => {
          console.log(users.data.results)
          this.setState({ results: users.data.results })
        })
      .catch((err) => console.log(err));
  };


  handleInputChange = event => {
    // const input = event.target.name;
    const value = event.target.value;
    const filteredEmployee = this.state.results.filter(
        (filteredEmployees) => {
            return (
            filteredEmployees.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            filteredEmployees.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            )
        }
    )
    this.setState({
      //[name]: value
        search: value,
      filteredEmployees: filteredEmployee
    });
  };


//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchEmployees(this.state.search);
//   };

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
          //handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results} filteredEmployees={this.state.filteredEmployee}/>
      </div>
    );
  }



}

export default SearchResults;