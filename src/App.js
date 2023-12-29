import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./component/Home";
import CountriesDetails from "./component/CountriesDetails";
function App() {
  return (
    <div className="App">
      <div className="Navigation-section">Where in the world?</div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/country/:population"
          element={<CountriesDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
