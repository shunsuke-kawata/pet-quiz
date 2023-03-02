import React from 'react';
import "../css/Question.css";
import { useState } from 'react';
import TotalResult from './TotalResult';


export default function Question({setanswerFlag,setqandaFlag,questionFlag,rightCount,content}) {
  const member = ["Araki", "Ibata", "Fukutome", "Woods"];
  //問題の正誤を保持する変数
  console.log(content);

  const handleClick=(flag)=>{
    setqandaFlag(true)
    setanswerFlag(flag) //問題からとってきた正誤の変数

    // ここに１０回目の終了処理書くかも？？
  }

  const optionObj = member.map((item, idx) =>
        <button className='option-btn' key={idx} onClick={() => handleClick(true)}>
          {idx+1}. {item}
        </button>
   /* <a href="result">
        <button className='option-btn' key={idx} onClick={() => setqandaFlag(true)}>
          {idx+1}. {item}
        </button>
    </a>*/
  // Only do this if items have no stable IDs
  // <Option key={item} toLink="result" optionContent={item} contentId={idx}/>
);
console.log(optionObj);
console.log(rightCount);
  return (
    <>
    {questionFlag ?(<TotalResult rightCount={rightCount}/>):(<div className='question-container'>
      <h1>問題文問題文問題文</h1>
      <div className='options'>
        {optionObj}
      </div>
    </div>)}
      </>
    /*<div className='question-container'>
      <h1>問題文問題文問題文</h1>
      <div className='options'>
        {optionObj}
      </div>
    </div>*/
  )
}
