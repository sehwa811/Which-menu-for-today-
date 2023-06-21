import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import MenuPage from "./routes/MenuPage";

import { SelectedProvider } from "./contexts/selectedContext";

import './App.css'

function App() {
  return (
    <>
      <SelectedProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
        </Routes>
      </SelectedProvider>
    </>
  );
}

export default App;
