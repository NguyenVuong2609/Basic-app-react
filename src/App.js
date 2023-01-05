import "./App.css";
import Control from "./components/controls";
import ListStudent from "./components/listStudent";
import Form from "./components/form";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
      getData: {},
      searchData: "",
      students: [
        {
          studentsID: "SV001",
          name: "Trần Hải Yến",
          firstName: "Trần Hải",
          lastName: "Yến",
          age: 24,
          gender: false,
          birthDate: "23/02/1999",
          address: "Hà Nội",
        },
        {
          studentsID: "SV002",
          name: "Trương Minh Thu",
          firstName: "Trương Minh",
          lastName: "Thu",
          age: 21,
          gender: false,
          birthDate: "10/09/2002",
          address: "Yên Bái",
        },
        {
          studentsID: "SV003",
          name: "Đỗ Văn Chuân",
          firstName: "Đỗ Văn",
          lastName: "Chuân",
          age: 27,
          gender: true,
          birthDate: "25/05/1996",
          address: "Nam Định",
        },
      ],
      sortDir: "",
      sortBy: "",
    };
  }
  handleSearch = (searchData) => {
    this.setState({ searchData: searchData });
  };
  handleToggle = (status) => {
    this.setState({
      isToggle: status,
      getData: "",
    });
  };
  handleData = (info) => {
    this.setState({ getData: info });
  };
  handleSort = (sortDir, sortBy) => {
    this.setState({
      sortBy: sortBy,
      sortDir: sortDir,
    });
  };
  render() {
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach((st) => {
        if (
          st.name.toLowerCase().includes(this.state.searchData.toLowerCase())
        ) {
          students.push(st);
        }
      });
    } else {
      students = [...this.state.students];
    }
    let data;
    if (this.state.isToggle) {
      data = <Form showDataForm={this.state.getData}></Form>;
    } else {
      data = "";
    }
    //!Sort//
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "name") {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) =>
            a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0
          );
        } else {
          students.sort((a, b) =>
            a.lastName > b.lastName ? -1 : a.lastName < b.lastName ? 1 : 0
          );
        }
      } else {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => a.age - b.age);
        } else {
          students.sort((a, b) => b.age - a.age);
        }
      }
    }
    return (
      <div className="App">
        <>
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control
                controlToggle={this.handleToggle}
                handleSearch={this.handleSearch}
                handleSort={this.handleSort}
              ></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent
                studentData={students}
                listStudentToggle={this.handleToggle}
                getListData={this.handleData}
              ></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {data}
          {/* END FORM SINH VIÊN */}
        </>
      </div>
    );
  }
}

export default App;
