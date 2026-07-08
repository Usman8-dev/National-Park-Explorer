import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Detail_page from "./Pages/Detail_page";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/park/:id" element={<Detail_page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;