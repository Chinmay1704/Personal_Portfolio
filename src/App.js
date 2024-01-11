import "./App.css";
import "./components/fonts_color.css";
import Header from "../src/components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectDes from "./components/Project-Descr/ProjectDes";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectDes />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
