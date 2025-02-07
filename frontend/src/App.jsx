import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<Home />} />
          <Route path="/algorithm" element={<Home />} />
          <Route path="/techwarehouse" element={<Home />} />
          <Route path="/ideas" element={<Home />} />
        </Routes>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
