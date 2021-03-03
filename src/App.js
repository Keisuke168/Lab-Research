import "./styles.css";
import Student from "./Student";
import Divider from "@material-ui/core/Divider";

export default function App() {
  return (
    <div className="App">
      <h1 className="heder">情知B3研究室志望調査</h1>
      <div>
        {/* <p>自分の学番下三桁のボタンから志望を選択してください</p> */}
        <p>GPAは書きたかったら書いてください。</p>
      </div>
      <Divider />

      <Student num="001" />
    </div>
  );
}
