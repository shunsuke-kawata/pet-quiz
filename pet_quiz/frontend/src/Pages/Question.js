import React from 'react';
import "../css/Question.css";


const Question = () => {

  // reactセクション
  const choices = ["a","a","a","a"]

  const optionObj = choices.map((item, idx) =>
    <a href="result">
        <button className='option-btn' key={idx}>
          {idx+1}. {item}
        </button>
    </a>
  // <Option key={item} toLink="result" optionContent={item} contentId={idx}/>
  );
  return (
    <div className='question-container'>
      <h1>問題文問題文問題文</h1>
      <div className='options'>
        {optionObj}
      </div>
    </div>
  )
}
export default Question;
