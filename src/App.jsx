import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeThree from "./Components/HomeThree";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeThree />} />
      </Routes>
    </>
  );
}

export default App;
