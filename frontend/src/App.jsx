import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/Home";
import Idea from "./components/Idea";
import TechSectionList from "./components/TechSectionList";
import Footer from "./components/Footer";
import "./App.css";
import AuthForm from "./components/AuthForm";
import Dsa from "./components/Dsa";
import AIfun from "./components/AIfun";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AIfun />} />
          <Route path="/algorithms" element={<Dsa />} />
          <Route path="/techwarehouse" element={<TechSectionList />} />
          <Route path="/ideas" element={<Idea />} />
          <Route path="/signup" element={<AuthForm signIn={false} />} />
          <Route path="/signin" element={<AuthForm signIn={true} />} />
        </Routes>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
