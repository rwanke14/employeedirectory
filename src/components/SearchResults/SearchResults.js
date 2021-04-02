import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import EmployeeList from "../EmployeeTable/EmployeeList";
import API from "../../utils/API";
import Wrapper from "../Wrapper/Wrapper";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
    filteredEmployees: [],
    columnToSort: "",
    sortType: "ascending",
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
        this.setState({ filteredEmployees: users.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    // const input = event.target.name;
    const value = event.target.value;
    const filteredEmployees = event.target.value.toLowerCase();
    const filteredEmployee = this.state.results.filter((results) => {
      return (
        results.name.first.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.name.last.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.name.first.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.gender.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.phone.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.cell.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.location.city.toLowerCase().indexOf(filteredEmployees) !== -1 ||
        results.location.state.toLowerCase().indexOf(filteredEmployees) !==
          -1 ||
        results.dob.age.toString().toLowerCase().indexOf(filteredEmployees) !==
          -1
      );
    });
    this.setState({
      search: value,
      filteredEmployees: filteredEmployee,
    });
  };

  sortList = (cell) => {
    // event.preventDefault();

    let setList;

    if (cell === "first") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.name[cell].localeCompare(b.name[cell]);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.name[cell].localeCompare(a.name[cell]);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "last") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.name[cell].localeCompare(b.name[cell]);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.name[cell].localeCompare(a.name[cell]);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "gender") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.gender.localeCompare(b.gender);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.gender.localeCompare(a.gender);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "phone") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.phone.localeCompare(b.phone);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.phone.localeCompare(a.phone);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "cell") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.cell.localeCompare(b.cell);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.cell.localeCompare(a.cell);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "city") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.location[cell].localeCompare(b.location[cell]);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.location[cell].localeCompare(a.location[cell]);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    if (cell === "state") {
      if (this.state.sortType === "ascending") {
        setList = this.state.results.sort((a, b) => {
          return a.location[cell].localeCompare(b.location[cell]);
        });
        this.setState({ sortType: "descending" });
      } else {
        setList = this.state.results.sort((a, b) => {
          return b.location[cell].localeCompare(a.location[cell]);
        });
        this.setState({ sortType: "ascending" });
      }
    }
    // if (cell === "age"){
    //     if(this.state.sortType === "ascending"){
    //         setList = this.state.results.sort((a,b) => {
    //             return a.dob[cell].localeCompare(b.dob[cell])
    //         })
    //         this.setState({sortType: "descending"});
    //     } else {
    //         setList = this.state.results.tosort((a,b) => {
    //             return b.dob[cell].localeCompare(a.dob[cell])
    //         })
    //         this.setState({sortType: "ascending"})
    //     }
    // }
  };

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
        <Wrapper>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeList
            results={this.state.filteredEmployees}
            sortList={this.sortList}
          />
        </Wrapper>
      </div>
    );
  }
}

export default SearchResults;
