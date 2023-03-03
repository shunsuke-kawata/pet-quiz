import React from 'react'
import "../css/Make.css";
import { useState  } from 'react';
import {useToggle} from 'react';


function MakeQuiz() {
    const [select_1 , setSelect_1]= useState([]);
    const [select_2 , setSelect_2]= useState([]);
    const [select_3 , setSelect_3]= useState([]);
    const [select_4 , setSelect_4]= useState([]);
    const [question , setQuestion]= useState([]);
    const [answer , setAnswer]=useState([]);

    const [addQuizText , setAddQuizText] = useState([]);
    const  onClickAddQuizText = ()=> {
        setAddQuizText(question);
        // setQuestion([]) ;
    }
    const [addAnswerText , setAddAnswerText] = useState([]);
    const  onClickAddAnswerText = ()=> {
        setAddAnswerText(answer);
        // setAnswer([]) ;
    }
    
    const [addText1 , setAddText1] = useState([]);
    const  onClickAddText1 = ()=> {
        setAddText1(select_1);
        // setSelect_1([]) ;
    }
    
    const [addText2 , setAddText2] = useState([]);
    const  onClickAddText2 = ()=> {
        setAddText2(select_2);
        // setSelect_2([]) ;
    }
    const [addText3 , setAddText3] = useState([]);
    const  onClickAddText3 = ()=> {
        setAddText3(select_3);
        // setSelect_3([]) ;
    }
    const [addText4 , setAddText4] = useState([]);
    const  onClickAddText4 = ()=> {
        setAddText4(select_4);
        // setSelect_4([]) ;
    }

    const setAllText = ()=>{

        onClickAddText1();
        onClickAddText2();
        onClickAddText3();
        onClickAddText4();
        onClickAddAnswerText();
        onClickAddQuizText();
    }
    // console.log([addText1, addText2,addText3,addText4,addQuizText,addAnswerText]);
    const handleClick = async ()=>{

        await setAllText();

    
        // console.log([addText1, addText2,addText3,addText4,addQuizText,addAnswerText]);
        console.log([select_1,select_2,select_3,select_4,question,answer])
        setSelect_1([]);
        setSelect_2([]);
        setSelect_3([]);
        setSelect_4([]);
        setQuestion([]);
        setAnswer([]);
        // handleChange([]);
    }
    // const Demo = () => {
    //     const [on, toggle] = useToggle(true);
    // const items = [true , false];
    // const [val, setVal] = useState(true);
    // const handleChange = (e) => {
    //     setVal(e.target.value);
    // };
       
    
  return (
    <div className='all'>
        <h1 className='makequiz'> 問題作成</h1>
        {/* <div className='quiztext'>問題文</div> */}
        <div className='quiz-parent'>
            <input type="text" placeholder='ここに問題文を書きましょう' className='quiz' value={question} onChange={(event) => setQuestion(event.target.value)}></input>
        </div>
            <div className='Grandparent'>
            {/* {items.map((item) => {
          return (
            <div key={item}>
              <input
                id={item}
                type="radio"
                value={item}
                onChange={handleChange}
                checked={item === val}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })} */}
           
                {/* onChange={(event) => setSelect_1(event.target.value)} */}
                <div className='parent-1'>
                    <input type="radio" name="q1"  className='select'  ></input>
                    <input type="text" placeholder='選択肢1' value={select_1} className='text' onChange={(event) => setSelect_1(event.target.value)}></input>
                </div>
                <div className='parent-2'>
                    {/* <input type="radio" name="q1"  className='select'></input> */}
                    <input type="radio" name="q1"  className='select'></input>
                    <input type="text" placeholder='選択肢2' value={select_2} className='text' onChange={(event) => setSelect_2(event.target.value)}></input>
                </div>
                <div className='parent-3'>
                    {/* <input type="radio" name="q1"  className='select'></input> */}
                    <input type="radio" name="q1"  className='select'></input>
                    <input type="text" placeholder='選択肢3' value={select_3} className='text' onChange={(event) => setSelect_3(event.target.value)}></input>
                </div>
                <div className='parent-4'>
                    {/* <input type="radio" name="q1" className='select'></input> */}
                    <input type="radio" name="q1"  className='select'></input>
                    <input type="text" placeholder='選択肢4' value={select_4} className='text' onChange={(event) => setSelect_4(event.target.value)}></input>
                </div> 
            </div>
        <div className='coment-parent'>
          <input type="text" placeholder='ここに解説を書きましょう' className='coment' value={answer} onChange={(event) => setAnswer(event.target.value)}></input>
        </div>
        <div className='makestart'>
            <button type="button" name="q1" value="作成" className='Submit-btn' onClick={()=>handleClick()}>作成</button>

        </div>
    </div>
    
  )
}

export default MakeQuiz