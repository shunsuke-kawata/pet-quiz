import React from 'react'
import classes from "../css/Home.module.css";
import Button from "../Components/Button";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  // axiosセクション
  const [contents, setContents] = useState([])
  // const [choices, setChoices] = useState([])

  useEffect(() => {
    // axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
    // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const getContents = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/getData',
          {
            headers:{
              "Content-Type":"application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*"
            }
          }
        ).then((response) => {
          setContents(response.data);
          // const a = []
          // for (let i = 1; i < 3; i++){
          //   a[0] = response.data[i].choices.choice1.body
          //   a[1] = response.data[i].choices.choice2.body
          //   a[2] = response.data[i].choices.choice3.body
          //   a[3] = response.data[i].choices.choice4.body
          // }
          // console.log(a);
          // setChoices(a)
        })
        
      } catch (error) {
        console.log(error);
      }
    };
    getContents();
  }, []);
  console.log(contents);

  // contensの配列処理

  // const oneQuestion = []
  // for(var i=0; i<10; i++){
  //   //配列の要素数を指定する
  //   oneQuestion[i] = [];

  //   oneQuestion[i][0] = contents.choices

  //   oneQuestion[i][0] = contents.choices.choice1.body;
  //   oneQuestion[i][0] = contents.choices.choice1.flag;

  //   oneQuestion[i][1] = contents.choices.choice2.body;
  //   oneQuestion[i][1] = contents.choices.choice2.flag;

  //   oneQuestion[i][2] = contents.choices.choice3.body;
  //   oneQuestion[i][2] = contents.choices.choice3.flag;

  //   oneQuestion[i][3] = contents.choices.choice4.body;
  //   oneQuestion[i][3] = contents.choices.choice4.flag;
  // }
  // console.log(oneQuestion);
  


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