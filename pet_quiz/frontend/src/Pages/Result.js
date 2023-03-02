import React from 'react'
import ResultOption from "../Components/ResultOption"
import "../css/Result.css";
import image from "../image/maruma-ku-illust3.png";

export default function Result() {
  return (
    <div className='result-parent'>
      <div className='img-parent'>
        <img className="judgment" src={image}></img>
      </div>
      <div className='answer'>
        正解！おめでとう！！
      </div>
      <div className='parent'>
        <div className='commentary-parent'>
          <p className='commentary'>ここに解説を書きますよここに解説を書きますよここに解説を書きますよここに解説を書きますよここに解説を書きますよ</p>
        </div>
        <ResultOption  toLink="/question" resultoption="次の問題"/>
          {/* <div className='next-parent'>
          </div> */}
      </div>
      
    </div>
  )
}
