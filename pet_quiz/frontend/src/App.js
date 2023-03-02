import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Result from "./Pages/Result";
import TotalResult from "./Pages/TotalResult";
import QandA from "./Pages/QandA";

function App() {
  return(
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/question">
        <QandA/>
      </Route>
      <Route path="/result">
        <Result />
      </Route>
      <Route path="/totalResult">
        <TotalResult />
      </Route>
    </BrowserRouter>
  )
}



export default App;
