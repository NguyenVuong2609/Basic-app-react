import React, { Component } from "react";

class Student extends Component {
  updateToggle = () => {
      this.props.studentToggle(true);
  }
  showInfoStudent = () => {
    this.updateToggle();
    this.props.getData(this.props.studentInfo)
  };
  render() {
    let {studentInfo} = this.props;
    let {num} = this.props;
    return (
      <tr>
        <td>{num + 1}</td>
        <td>{studentInfo.studentsID}</td>
        <td>{studentInfo.name}</td>
        <td>{studentInfo.age}</td>
        <td>{studentInfo.gender?"Nam":"Nữ"}</td>
        <td>
          <div className="template-demo">
            <button onClick={this.showInfoStudent} type="button" className="btn btn-danger btn-icon-text">
              Xem
            </button>
            <button onClick={this.updateToggle} type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
export default Student;
