import Question from "./Question";
import { useState } from "react";
import Result from "./Result";


const QandA = () =>{
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
          />)}
        
    </>)
}

export default QandA;