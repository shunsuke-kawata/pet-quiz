import React from 'react'
import "../css/Result.css";
import image from "../image/maruma-ku-illust3.png";
import arcimage from "../image/batuma-ku-illust8.png";

//問題の正誤をb判定する変数
export default function Result({answerFlag,setqandaFlag,answerCount,setanswerCount,setquestionFlag,rightCount,setrightCount}) {
  const handleClick = () =>{
    if(answerCount<9){
      setanswerCount(answerCount+1)
    }else{
      setquestionFlag(true)
    }
    setqandaFlag(false);
  }

  const autoClick = () =>{
    handleClick();
    setrightCount(rightCount+1);
    console.log(answerCount)
    console.log(rightCount);
  }

  console.log(answerFlag)
  console.log(answerCount)
  return (
    <> 
        {answerFlag ?(<div className='result-parent'>
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
        <button className='btn' onClick={() => autoClick()}>次の問題へ</button>
          { <div className='next-parent'>
          </div>}
      </div>
      
    </div>):(<div className='result-parent'>
      <div className='img-parent'>
        <img className="judgment" src={arcimage}></img>
      </div>
      <div className='answer'>
        不正解！あほ
      </div>
      <div className='parent'>
        <div className='commentary-parent'>
          <p className='commentary'>ここに解説を書きますよここに解説を書きますよここに解説を書きますよここに解説を書きますよここに解説を書きますよ</p>
        </div>
        <button className='btn' onClick={() => handleClick()}>次の問題へ</button>
      </div>
      
    </div>)}
    </>
    
  )
}
