import Question from "./Question";
import Result from "./Result";
import axios from "axios";
import { useState, useEffect } from "react";

const QandA = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    // axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
    // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const getContents = async () => {
      try {
        const response = await axios
          .get("https://thawing-mountain-33088.herokuapp.com/getData", {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => {
            console.log(response);
            setContents(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getContents();
    console.log("effect");
  }, []);
  console.log(contents);

  const [qandaFlag, setqandaFlag] = useState(false);
  const [answerCount, setanswerCount] = useState(0);
  const [answerFlag, setanswerFlag] = useState(false);
  const [questionFlag, setquestionFlag] = useState(false);
  const [rightCount, setrightCount] = useState(0);
  console.log(contents[answerCount]);
  console.log(answerCount);

  const result = (
    <Result
      answerFlag={answerFlag}
      setanswerFlag={setanswerFlag}
      setqandaFlag={setqandaFlag}
      answerCount={answerCount}
      setanswerCount={setanswerCount}
      setquestionFlag={setquestionFlag}
      rightCount={rightCount}
      setrightCount={setrightCount}
      content={contents[answerCount]}
    />
  );
  const question = (
    <Question
      setanswerFlag={setanswerFlag}
      setqandaFlag={setqandaFlag}
      questionFlag={questionFlag}
      rightCount={rightCount}
      content={contents[answerCount]}
    />
  );

  return (
    <>
      {qandaFlag ? (
        // <Result
        //   answerFlag={answerFlag}
        //   setanswerFlag={setanswerFlag}
        //   setqandaFlag={setqandaFlag}
        //   answerCount={answerCount}
        //   setanswerCount={setanswerCount}
        //   setquestionFlag={setquestionFlag}
        //   rightCount={rightCount}
        //   setrightCount={setrightCount}
        //   content={contents[answerCount]}
        // />
        <>{result}</>
      ) : (
        // <Question
        //   setanswerFlag={setanswerFlag}
        //   setqandaFlag={setqandaFlag}
        //   questionFlag={questionFlag}
        //   rightCount={rightCount}
        //   content={contents[answerCount]}
        // />
        <>{question}</>
      )}
    </>
  );
};

export default QandA;
