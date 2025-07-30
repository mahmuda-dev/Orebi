
import "./App.css";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";
import Shop from "./components/Pages/Shop";
import Home from "./components/Pages/home";
import Rootlayout from "./components/layouts/Rootlayout";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="*" element={<Error/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
