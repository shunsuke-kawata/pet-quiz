import React from 'react';
import "../css/Question.css";

export default function Question() {
  const member = ["Araki", "Ibata", "Fukutome", "Woods"];

  const optionObj = member.map((item, idx) =>
    <a href="result">
        <button className='option-btn' key={idx}>
          {idx+1}. {item}
        </button>
    </a>
  // Only do this if items have no stable IDs
  // <Option key={item} toLink="result" optionContent={item} contentId={idx}/>
);
console.log(optionObj);
  return (
    <div className='question-container'>
      <h1>問題文問題文問題文</h1>
      <div className='options'>
        {optionObj}
      </div>
    </div>
  )
}
