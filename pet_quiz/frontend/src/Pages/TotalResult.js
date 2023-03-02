import React from 'react'
import Button from '../Components/Button'
import '../css/TotalResult.css'

export default function TotalResult() {
  return (
    
    <div>
      <div className='title'>結果発表！</div>
      <div className='result'>n/10問正解</div>
      <p>なんか適当な文</p>
      <div className='bon'>
      <Button toLink="/" ButtonContent="終わり"/>
      </div>
    </div>

  )
}
