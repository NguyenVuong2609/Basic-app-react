import React, {Component} from "react";
import Student from "./student";

class ListStudent extends Component {
  listStudentToggle = (status) => {
      this.props.listStudentToggle(status)
  }
  showStudentInfo = (info) => {
     this.props.getListData(info)
  }
    render() {
      let {studentData} = this.props;
      let element = studentData.map((st,index)=>{
        return <Student key={st.studentsID} studentInfo = {st} num = {index} studentToggle={this.listStudentToggle} getData={this.showStudentInfo}></Student>
      });
        return(
            <div className="card-body">
              <h3 className="card-title">Danh sách sinh viên</h3>
              <div className="table-responsive pt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã sinh viên</th>
                      <th>Tên sinh viên</th>
                      <th>Tuổi</th>
                      <th>Giới tính</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                   {element}
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
};
export default ListStudent;