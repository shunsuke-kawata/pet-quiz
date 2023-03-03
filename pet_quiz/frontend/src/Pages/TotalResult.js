import React from "react";
import Button from "../Components/Button";
import "../css/TotalResult.css";

export default function TotalResult({ rightCount }) {
  var resultMessage = "";
  if (rightCount == 10) {
    resultMessage = "満点!!天才!!";
  } else if (rightCount >= 8) {
    resultMessage = "惜しい!!あと少し!!";
  } else if (rightCount >= 6) {
    resultMessage = "うん、まぁ、よくできました!!";
  } else if (rightCount >= 4) {
    resultMessage = "もう少し頑張ろう!!";
  } else if (rightCount >= 2) {
    resultMessage = "よくできました!!(わら)";
  } else {
    resultMessage = "伸びしろしかないやん";
  }
  console.log(resultMessage);
  console.log(rightCount);
  return (
    <div>
      <div className="title">結果発表！</div>
      <div className="result">{rightCount}/10問正解</div>
      <p>{resultMessage}</p>
      <div className="bon">
        <Button toLink="/" ButtonContent="終わり" />
      </div>
    </div>
  );
}
