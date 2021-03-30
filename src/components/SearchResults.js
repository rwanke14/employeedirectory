import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = () => {
    API.getEmployees()
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results} />
      </div>
    );
  }



}

export default SearchResults;