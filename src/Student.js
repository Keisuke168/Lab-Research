import React from "react";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
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
          />
        </div>
      </>
    );
  }
}

export default Student;
