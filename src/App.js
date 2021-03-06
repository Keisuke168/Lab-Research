import "./styles.css";
import React from "react";
import Student from "./Student";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
const arrayChunk = ([...array], size = 1) => {
  return array.reduce(
    (acc, value, index) =>
      index % size ? acc : [...acc, array.slice(index, index + size)],
    []
  );
};

const labs = [
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.onetimeGet()
    };
    this.getData();
    this.filterStudent = this.filterStudent.bind(this);
  }
  onetimeGet() {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  }

  getData() {
    firebase
      .database()
      .ref("users")
      .on("value", (snapshot) => {
        this.setState({ data: snapshot.val() });
      });
  }
  filterStudent(lab) {
    if (typeof this.state.data !== "undefined") {
      var res = Object.keys(this.state.data).filter((key) => {
        return this.state.data[key].lab === lab;
      });

      res = res.map((e) => {
        return (
          <Student
            num={e}
            gpa={this.state.data[e].gpa}
            lab={this.state.data[e].lab}
          />
        );
      });
      return (
        <tbody className="table">
          {arrayChunk(res, 5).map((elem) => {
            return (
              <tr className="tr">
                {elem.map((e) => {
                  return <td className="ta">{e}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      );
    }
  }

  render() {
    if (typeof this.state.data === "undefined") {
      return (
        <div className="App">
          <h1 className="heder">情知B3研究室志望調査</h1>
          <div>
            <p>各学番下三桁のボタンから志望を選択してください</p>
            <p>GPAは書きたかったら書いてください。</p>
            <p>
              (何度でも変更できるので現状での希望を気楽にポチポチしてください)
            </p>
          </div>
          <Divider />
          <Container
            maxWidth="sm"
            style={{
              backgroundColor: "#cfe8fc",
              justifyContent: "center"
            }}
          >
            <p>未選択</p>
            <Divider />
            {this.filterStudent("未選択")}
          </Container>
          {labs.map((elem) => {
            return (
              <Container
                maxWidth="sm"
                style={{ backgroundColor: "#cfe8fc", justifyContent: "center" }}
              >
                <p>{elem}</p>
                {this.filterStudent(elem)}
              </Container>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1 className="heder">情知B3研究室志望調査</h1>
          <div>
            <p>各学番下三桁のボタンから志望を選択してください</p>
            <p>GPAは書きたかったら書いてください。</p>
            <p>
              (何度でも変更できるので現状での希望を気楽にポチポチしてください)
            </p>
          </div>

          <Divider />
          <Container
            maxWidth="sm"
            style={{ backgroundColor: "#cfe8fc", justifyContent: "center" }}
          >
            <p>未選択</p>
            <Divider />
            {this.filterStudent("未選択")}
          </Container>
          {labs.map((elem) => {
            return (
              <Container
                maxWidth="sm"
                style={{ backgroundColor: "#cfe8fc", justifyContent: "center" }}
              >
                <p>{elem}</p>
                <Divider />
                {this.filterStudent(elem)}
              </Container>
            );
          })}
        </div>
      );
    }
  }
}
export default App;
