import "./App.css";
import "./components/fonts_color.css";
import Header from "../src/components/Header/Header"
import { Routes, Route } from "react-router-dom";
import Hero from "./routes/Hero";
import ProjectDes from "./routes/ProjectDes"
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectDes />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
