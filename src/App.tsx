import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import MenuPage from "./routes/MenuPage";

import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import ResultMap from "./routes/result/map";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="resultMap" element={<ResultMap />}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
