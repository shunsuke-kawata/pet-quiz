import React from "react";
import "../css/Question.css";
import { useState } from "react";
import TotalResult from "./TotalResult";

export default function Question({
  setanswerFlag,
  setqandaFlag,
  questionFlag,
  rightCount,
  content,
}) {
  const member = ["Araki", "Ibata", "Fukutome", "Woods"];
  //問題の正誤を保持する変数

  const handleClick = (flag) => {
    setqandaFlag(true);
    setanswerFlag(flag); //問題からとってきた正誤の変数
    // ここに１０回目の終了処理書くかも？？
  };

  const optionObj = content?.choices.map((item, idx) => (
    <button
      className="option-btn"
      key={idx}
      onClick={() => handleClick(item.flag)}
    >
      {idx + 1}. {item.body}
    </button>
  ));

  return (
    <>
      {questionFlag ? (
        <TotalResult rightCount={rightCount} />
      ) : (
        <div className="question-container">
          <h3>{content?.explanation}</h3>
          <div className="options">{optionObj}</div>
        </div>
      )}
    </>
  );
}
