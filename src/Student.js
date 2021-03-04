import React from "react";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import firebase from "firebase";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      gpa: null,
      lab: null
    };
    this.setFalse = this.setFalse.bind(this);
    this.setLab = this.setLab.bind(this);
    this.writeData = this.writeData.bind(this);
    this.changeGpa = this.changeGpa.bind(this);
  }
  writeData() {
    firebase
      .database()
      .ref("users/" + this.props.num)
      .set({
        lab: this.state.lab,
        gpa: this.state.gpa
      });
  }
  changeGpa(event) {
    this.setState({ gpa: event.target.value });
  }
  setFalse() {
    this.setState({ show: false });
  }
  setLab(lab) {
    this.setState({ lab: lab });
  }

  render() {
    return (
      <>
        <div>
          <div>
            <Button
              variant="contained"
              className="student"
              color="primary"
              style={{ width: "20%", height: "50px", fontSize: "10px" }}
              onClick={() => this.setState({ show: true })}
            >
              <p>
                {this.props.num}
                <br />
                GPA:{this.state.gpa}
              </p>
            </Button>
          </div>

          <Modal
            show={this.state.show}
            close={this.setFalse}
            setLab={this.setLab}
            lab={this.state.lab}
            changeGpa={this.changeGpa}
            sendData={this.writeData}
          />
        </div>
      </>
    );
  }
}

export default Student;
