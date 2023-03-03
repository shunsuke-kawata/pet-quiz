import React from "react";
import classes from "../css/Home.module.css";
import Button from "../Components/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  // axiosセクション
  const [contents, setContents] = useState([]);
  // const [choices, setChoices] = useState([])

  // useEffect(() => {
  //   // axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
  //   // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  //   const getContents = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://localhost:8000/getData',
  //         {
  //           headers:{
  //             "Content-Type":"application/x-www-form-urlencoded",
  //             "Access-Control-Allow-Origin": "*"
  //           }
  //         }
  //       ).then((response) => {
  //         const listData = response.data
  //         setContents(listData);
  //       })

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getContents();
  // }, []);
  // console.log(contents);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.title}>ペットクイズだよだよ</div>
      <div className="parent">
        <Button toLink="/question" ButtonContent="スタート" />
      </div>
    </div>
  );
};

export default Home;
