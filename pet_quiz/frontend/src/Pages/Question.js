import React from "react";
import "../css/Question.css";
import { useState } from "react";
import TotalResult from "./TotalResult";

export default function Question({
  setanswerFlag,
  setqandaFlag,
  questionFlag,
  rightCount,
}) {
  const member = ["Araki", "Ibata", "Fukutome", "Woods"];
  //問題の正誤を保持する変数

  const handleClick = (flag) => {
    setqandaFlag(true);
    setanswerFlag(flag); //問題からとってきた正誤の変数
  };

  const optionObj = member.map((item, idx) => {
    <button className="option-btn" key={idx} onClick={() => handleClick(true)}>
      {idx + 1}. {item}
    </button>;
  });

  return (
    <>
      {questionFlag ? (
        <TotalResult rightCount={rightCount} />
      ) : (
        <div className="question-container">
          <h1>問題文問題文問題文</h1>
          <div className="options">{optionObj}</div>
        </div>
      )}
    </>
  );
}
