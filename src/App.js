import "./styles.css";
import React from "react";
import Student from "./Student";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import firebase from "firebase";

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

        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="heder">情知B3研究室志望調査</h1>
        <div>
          <p>自分の学番下三桁のボタンから志望を選択してください</p>
          <p>GPAは書きたかったら書いてください。</p>
        </div>
        {}
        <Divider />
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "#cfe8fc", justifyContent: "center" }}
        >
          <p>未設定</p>
          <Student num="001" />
          <Student num="002" />
        </Container>
        {labs.map((elem) => {
          return (
            <Container
              maxWidth="sm"
              style={{ backgroundColor: "#cfe8fc", justifyContent: "center" }}
            >
              <p>{elem}</p>
              <Student num="001" />
              <Student num="002" />
            </Container>
          );
        })}
      </div>
    );
  }
}
export default App;
