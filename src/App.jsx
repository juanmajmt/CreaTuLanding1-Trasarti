
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import PriceFinder from "./components/PriceFinder";
import Help from "./components/Help";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/category/:categoryId" element={<Marketplace />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/buscador-precios" element={<PriceFinder />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="*" element={<h2 className="page-title">404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
