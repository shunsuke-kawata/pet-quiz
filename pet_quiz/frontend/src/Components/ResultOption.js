import React from 'react'
import "../css/ResultOption.css";

function ResultOption(props) {
  return (
    <a href={props.toLink} className='next-button'>{props.resultoption}</a>
  )
}

export default ResultOption