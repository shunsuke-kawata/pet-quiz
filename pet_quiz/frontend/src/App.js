import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  )
}



export default App;
