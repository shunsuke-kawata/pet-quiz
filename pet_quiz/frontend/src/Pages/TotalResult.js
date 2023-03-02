import React from 'react'
import Button from '../Components/Button'
import '../css/TotalResult.css'

export default function TotalResult({rightCount}) {
  console.log(rightCount)
  return (
    
    <div>
      <div className='title'>結果発表！</div>
      <div className='result'>{rightCount}/10問正解</div>
      <p>なんか適当な文</p>
      <div className='bon'>
      <Button toLink="/" ButtonContent="終わり"/>
      </div>
    </div>

  )
}
