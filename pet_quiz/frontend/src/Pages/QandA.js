import Question from "./Question";
import Result from "./Result";
import axios from 'axios';
import { useState, useEffect } from 'react';


const QandA = () =>{
    const [contents, setContents] = useState([])
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
            })
            
          } catch (error) {
            console.log(error);
          }
        };
        getContents();
      }, []);
    console.log(contents);


    const [qandaFlag,setqandaFlag]=useState(false);
    const[answerCount,setanswerCount]=useState(0);
    const[answerFlag,setanswerFlag]=useState(false);
    const[questionFlag,setquestionFlag]=useState(false);
    const[rightCount,setrightCount]=useState(0);
    
    return(<> 
        {qandaFlag ?(
        <Result answerFlag={answerFlag}
         setanswerFlag={setanswerFlag}
          setqandaFlag={setqandaFlag}
           answerCount={answerCount}
            setanswerCount={setanswerCount}
             setquestionFlag={setquestionFlag}
              rightCount={rightCount} 
              setrightCount={setrightCount}
              />
        ):(<Question 
        setanswerFlag={setanswerFlag}
         setqandaFlag={setqandaFlag} 
         questionFlag={questionFlag}
          rightCount={rightCount}
          content={contents[answerCount]}

          />)}
        
    </>)
}

export default QandA;