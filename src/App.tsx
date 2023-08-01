import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import MenuPage from "./routes/MenuPage";


import './App.css'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
        </Routes>
    </>
  );
}

export default App;
