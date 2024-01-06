import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./templates/Home";
import CountriesDetails from "./templates/CountriesDetails";

function App() {
  return (
    <div className="App">
      <div className="Navigation-section">Where in the world?</div>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/country/:population" Component={CountriesDetails}></Route>
      </Routes>
    </div>
  );
}

export default App;
