import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seccion1 from "./components/Seccion1";
import Home from "./pages/Home";
import Encuesta from "./pages/Encuesta";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Header fijo */}
      <Seccion1 />
      {/* Contenido principal con rutas */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encuesta" element={<Encuesta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;