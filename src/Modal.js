import React from "react";
import "./Modal.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "react-widgets/dist/css/react-widgets.css";
import DropdownList from "react-widgets/lib/DropdownList";

class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  labs = [
    "cs11",
    "cs12",
    "cs13",
    "cs14",
    "cs16",
    "cs17",
    "cs18a",
    "cs18b",
    "cs21",
    "cs24",
    "cs25",
    "cs26",
    "cs28",
    "cs29",
    "cs31",
    "cs32",
    "cs51",
    "cs52",
    "cs53",
    "cs54",
    "cs55"
  ];

  render() {
    if (this.props.show) {
      return (
        <>
          <div>
            <div id="overlay" onClick={this.props.close}>
              <div id="content" onClick={(e) => e.stopPropagation()}>
                <p>
                  <TextField label="GPA" onChange={this.props.changeGpa} />
                </p>
                <br />
                第一志望
                <DropdownList
                  value={this.props.lab}
                  onChange={this.props.setLab}
                  data={this.labs}
                />
                <p>
                  <Button variant="contained" color="primary">
                    決定
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Modal;
