import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Prototype from "./pages/prototype/Prototype";
import "./App.scss";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import { NOT_FOUND, UNAUTHORISED } from "./constants";

const App = () => {
  return (
    <div className="app h-100">
      <div className="app-preivew h-100">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prototype" element={<Prototype />} />
            <Route path="/unauthorized" element={<Error error={UNAUTHORISED} />} />
            <Route path="*" element={<Error error={NOT_FOUND} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
