import React from 'react'
import classes from "../css/Home.module.css";
import Button from "../Components/Button";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
        <div className={classes.title}>ペットクイズだよだよ</div>
        <div className='parent'>
            <Button toLink="/question" ButtonContent="スタート"/>
        </div>
    </div>
    
  )
}

export default Home