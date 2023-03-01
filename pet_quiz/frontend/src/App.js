import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  )
}



export default App;
