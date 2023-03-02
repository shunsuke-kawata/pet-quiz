import React from 'react'
import "../css/Button.css";

export default function Button(props) {
  return (
    <a href={props.toLink} className="start">{props.ButtonContent}</a> 
  )
}
