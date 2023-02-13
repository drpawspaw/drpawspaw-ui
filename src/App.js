import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Prototype from "./pages/prototype/Prototype";
import "./App.scss";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="app h-100">
      <Header />
      <div className="app-preivew">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prototype" element={<Prototype />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
