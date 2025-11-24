import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="app-main">
        <ItemListContainer greeting="¡Bienvenido a RepuesTOP!" />
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} RepuesTOP · Repuestos & Marketplace
      </footer>
    </div>
  );
}

export default App;
