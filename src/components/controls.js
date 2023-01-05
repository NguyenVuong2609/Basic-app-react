import React, { Component } from "react";

class Control extends Component {
  constructor() {
    super();
    this.state = {
      searchData: "",
    };
  }
  handleControlsToggle = () => {
    this.props.controlToggle(true);
  };
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ searchData: value });
  };
  handleSearch = () => {
    this.props.handleSearch(this.state.searchData);
  };
  handleSort = (event) => {
    let value = event.target.value;
    let arraySort = value.split("-");
    this.props.handleSort(arraySort[0], arraySort[1]);
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              onClick={this.handleControlsToggle}
              type="button"
              className="btn btn-primary btn-icon-text"
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handleSort}>
              <option value=""></option>
              <option value="name-ASC">Từ A-Z</option>
              <option value="name-DESC">Từ Z-A</option>
              <option value="age-ASC">Tuổi tăng dần</option>
              <option value="age-DESC">Tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Control;
